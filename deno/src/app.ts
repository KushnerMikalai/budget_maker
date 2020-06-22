import { bgGreen, black, Application, oakCors } from '../deps.ts';
import { router } from './routes/routes.ts';
import { logger } from './utils/logger.ts';
import { notFound } from './utils/404.ts';
import { ErrorMiddleware } from './middlewares/error.ts';
import { handleAuthHeader } from './middlewares/handleAuthHeader.ts';

export class App {
  public app: Application;
  public port: number;
  public logger: any;

  constructor(port: any) {
    this.app = new Application();
    this.port = port;
    this.logger = logger();

    this.initializeErrorHandling();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  // initialize middlewares
  private initializeMiddlewares() {
    // Logger
    this.app.use(async (ctx, next) => {
      await next();
      const rt = ctx.response.headers.get('X-Response-Time');
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
    });

    // Timing
    this.app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.response.headers.set('X-Response-Time', `${ms}ms`);
    });

    // Auth Header
    this.app.use(handleAuthHeader);
  }

  // initialize error handling
  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
    this.app.use(oakCors());
  }

  // initialize routes
  private initializeRoutes() {
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
    this.app.use(notFound);
  }

  // server listen
  public async listen() {
    console.log(bgGreen(black(`Server started on port ${this.port}`)));
    console.log(`> http://localhost:${this.port}`);
    return await this.app.listen({ port: this.port });
  }
}
