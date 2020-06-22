export interface Config {
  port: string | number;
  dbName: string;
  dbHostUrl: string;
  jwtSecret: string;
}

export interface IUser {
  _id: string;
  password: string;
  name: string;
  email: string;
  role: string;
  date: Date;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
  user: Partial<Omit<IUser, 'password'>>;
}
