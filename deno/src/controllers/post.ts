import { RouterContext, uuid, yup } from '../../deps.ts';
import { IPost } from '../types.ts';
import { Post } from '../models/post.ts';

const createPostSchema = yup.object({
  title: yup.string().required(),
  body: yup.string().required(),
});

export async function createPost(ctx: RouterContext) {
  try {
    const {
      request,
      response,
      state: { user },
    } = ctx;

    if (!user) {
      response.status = 401;
      response.body = {
        message: 'Unauthorized',
      };
      return;
    }
    const body = await request.body();
    const data: Omit<IPost, 'id' | 'user'> = body.value;
    await createPostSchema.validate(data);
    const postId = uuid.generate();

    const post = await Post.insert({ ...data, id: postId, userId: user.id });
    response.status = 201;
    response.body = {
      message: 'post created',
      data: { id: postId, userId: user.id },
    };
  } catch (error) {
    throw error;
  }
}
