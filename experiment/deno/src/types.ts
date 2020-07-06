export interface Config {
  PORT: string | number;
  dbName: string;
  dbHostUrl: string;
  jwtSecret: string;
  SEND_EMAIL: string;
  pwdEmail: string;
}

export interface IOid {
  $oid: string;
}

export interface IUser {
  _id: IOid;
  password: string;
  name: string;
  email: string;
  role: string;
  date: Date;
  status: string;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
  user: Partial<Omit<IUser, 'password'>>;
}
