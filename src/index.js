const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = { status: 1 };
  next();
});

app.use(router.routes());

app.listen(1234);

