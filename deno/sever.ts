import { App } from './src/app.ts';
import { config } from './src/config/config.ts';
import { DatabaseConnection } from './src/config/db.ts';

const app = new App(+config.PORT);
const db = new DatabaseConnection(config.dbName, config.dbHostUrl);
db.connect();
app.listen();
