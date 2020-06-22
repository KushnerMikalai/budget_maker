import { Context, validateJwt } from '../../deps.ts';
import { IUser } from '../types.ts';
import { config } from '../config/config.ts';
import { User } from '../models/user.ts';

export const handleAuthHeader = async (ctx: any, next: () => Promise<void>) => {
  try {
    const { request, state } = ctx;

    const jwt =
      request.headers.get('authorization')?.split('bearer ')?.[1] || '';

    if (!jwt) {
      state.user = null;
    } else {
      const validatedJwt: any = await validateJwt(jwt, config.jwtSecret);

      if (!validatedJwt.isValid) {
        state.user = null;
      } else {
        const user = await User.findOneById(validatedJwt.payload?.id as string);

        state.user = user ? user : null;
      }
    }

    await next();
  } catch (error) {
    throw error;
  }
};
