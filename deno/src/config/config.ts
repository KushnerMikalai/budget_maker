import 'https://deno.land/x/dotenv/load.ts';
import { Config } from '../types.ts';
import { envConfig } from '../../deps.ts';

envConfig();

export const config: Config = {
  port: Deno.env.get('PORT') || 8080,
  dbName: Deno.env.get('DB_NAME') || 'deno_demo',
  dbHostUrl: Deno.env.get('DB_HOST_URL') || 'mongodb://localhost:27017',
  jwtSecret: Deno.env.get('JWT_SECRET')!,
};
