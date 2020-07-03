import { IUser } from '../types.ts';
import { bcrypt } from '../../deps.ts';
import { db } from '../config/db.ts';
// import { sendEmail } from '../utils/sendEmail.ts';

class UserModel {
  private dbClient: any;

  constructor(db: any) {
    this.dbClient = db.getDatabase().collection('users');
  }

  private static async hashThePassword(password: string): Promise<string> {
    return await bcrypt.hash(password);
  }

  private static async beforeInsert(data: IUser): Promise<IUser> {
    const hashedPassword = await UserModel.hashThePassword(data.password);
    return {
      ...data,
      password: hashedPassword,
    };
  }

  private async get(type: string, value: string | number): Promise<IUser> {
    try {
      const dbQuery =
        type === '_id'
          ? {
              [type]: {
                $oid: value,
              },
            }
          : {
              [type]: {
                $eq: value,
              },
            };
      const res = await this.dbClient.findOne(dbQuery);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async insert(args: IUser): Promise<{ id: string }> {
    try {
      const data = await UserModel.beforeInsert(args);

      const id = await this.dbClient.insertOne({
        email: data.email,
        password: data.password,
        name: data.name,
        data: new Date(),
        role: 'user',
        status: 'no_validated'
      });
      // await sendEmail(
      //   data.email, 
      //   'Welcome to SpaceWallet', 
      //   `<a href="google.com">Link to validate User ${id}</a>`
      // );
      return { id: id.$oid };
    } catch (error) {
      throw error;
    }
  }

  async findOneByEmail(email: string): Promise<Omit<IUser, 'password'> | null> {
    try {
      const user = await this.get('email', email);
      if (!user) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: any): Promise<Omit<IUser, 'password'> | null> {
    try {
      const user = await this.get('_id', id);
      if (!user) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }

  async comparePassword(
    email: string,
    password: string
  ): Promise<Omit<IUser, 'password'> | null> {
    try {
      const user = await this.get('email', email);
      if (!user) return null;

      const result = bcrypt.compare(password, user.password);
      if (!result) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export const User = new UserModel(db);
