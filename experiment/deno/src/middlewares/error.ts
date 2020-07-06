import { isHttpError } from '../../deps.ts';
import { logger } from '../utils/logger.ts';

export const ErrorMiddleware = async (ctx: any, next: () => Promise<void>) => {
  var loggerErr: any;
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case 404:
          ctx.response.status = err.status;
          ctx.response.body = { message: err.message };
          break;
        default:
          ctx.response.status = err.status;
          ctx.response.body = {
            message: err.message ? err.message : 'Internal Server Error',
          };
      }
    } else {
      loggerErr = logger();
      loggerErr.info(
        'Internal Server Error name {err} message {message}',
        err.name,
        err.message
      );
      ctx.response.status = 500;
      ctx.response.body = { message: 'Internal Server Error' };
    }
  }
};
