import { IPost, IUser } from '../types.ts';
import { db } from '../config/db.ts';

class PostModel {
  private dbClient: any;

  constructor(db: any) {
    this.dbClient = db.getDatabase().collection('posts');
  }

  async insert(
    data: Omit<IPost, 'user'> & { userId: string }
  ): Promise<Omit<IPost, 'user'> | null> {
    try {
      const result = await this.dbClient.insertOne({
        id: data.id,
        title: data.title,
        body: data.body,
        userId: data.userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const Post = new PostModel(db);
