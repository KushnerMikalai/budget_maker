import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const MONGO_URL = 'mongodb+srv://nickolaikushner:RW3pPvCjGrN9UaE@cluster0-7gsrc.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient();
client.connectWithUri(MONGO_URL);

const db = client.database('stage_1');

export default db;