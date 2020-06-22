import { RouterContext, validateJwt, uuid, yup, getQuery } from '../../deps.ts';
import { IUser } from '../types.ts';
import { User } from '../models/user.ts';
import { generateJwt } from '../utils/helpers.ts';
import { config } from '../config/config.ts';

const signupSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export async function handlePost(ctx: RouterContext) {
  const { request, response } = ctx;
  const requestBody = await request.body();
  const query = getQuery(ctx, { mergeParams: true });

  let res: any = {
    status: 404,
    body: '',
  };
  try {
    switch (query.do) {
      case 'signup':
        res = await signup(requestBody);
        break;
      case 'login':
        res = await login(requestBody);
        break;
    }
    response.status = res.status;
    response.body = res.body;
  } catch (error) {
    throw error;
  }
}

export async function handleGet(ctx: RouterContext) {
  const { request, response } = ctx;
  const query = getQuery(ctx, { mergeParams: true });
  const jwt = request.headers.get('authorization')?.split('bearer ')?.[1] || '';

  try {
    let res: any = {
      status: 404,
      body: '',
    };
    switch (query.do) {
      case 'getOne':
        res = await getOne(jwt);
        break;
    }
    response.status = res.status;
    response.body = res.body;
  } catch (error) {
    throw error;
  }
}

// post
const signup = async (body: any) => {
  const data: IUser = body.value;
  await signupSchema.validate(data);

  let user = await User.findOneByEmail(data.email);
  if (user) {
    return {
      status: 400,
      body: {
        message: `User with email : ${data.email} already exist`,
      },
    };
  }

  const { id } = await User.insert(data);

  const jwt = generateJwt(id);
  return {
    status: 201,
    body: {
      data: jwt,
    },
  };
};

const login = async (body: any) => {
  const data: Omit<IUser, 'id' | 'name'> = body.value;
  await loginSchema.validate(data);

  const user = await User.comparePassword(data.email, data.password);
  if (!user) {
    return {
      status: 400,
      body: {
        message: 'User not found or bad password',
      },
    };
  }

  const jwt = generateJwt(user._id);
  return {
    status: 201,
    body: {
      data: jwt,
    },
  };
};

// get
const getOne = async (jwt: string) => {
  if (!jwt) {
    return {
      status: 401,
      body: {
        message: 'Unauthorized',
      },
    };
  }

  const validatedJwt = await validateJwt(jwt, config.jwtSecret);

  if (!validatedJwt.isValid) {
    return {
      status: 401,
      body: {
        message: 'Unauthorized',
      },
    };
  }

  const user = await User.findOneById(validatedJwt.payload?.id as string);

  if (!user) {
    return {
      status: 401,
      body: {
        message: 'Unauthorized',
      },
    };
  }

  return {
    status: 200,
    body: { email: user.email, name: user.name, role: user.role },
  };
};
