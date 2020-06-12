import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes/routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.response.body = 'Page not found';
});

app.listen({ port: 8080 });
console.log('listen > http://localhost:8080');
