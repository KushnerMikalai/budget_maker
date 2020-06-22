import { config } from '../config/config.ts';
import { MongoClient } from '../../deps.ts';

export class DatabaseConnection {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  public connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  public getDatabase() {
    return this.client.database(this.dbName);
  }
}

const db = new DatabaseConnection(config.dbName, config.dbHostUrl);
db.connect();
export { db };