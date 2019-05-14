import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

import config from './config';
import errorHandle from './middleware/errorHandle';
import router from './routes/index';
import convert from 'koa-convert'


const serve = require('koa-static');

const app = new Koa();

app.use(convert(cors()))
  .use(convert(serve('./public')))
  .use(bodyParser())
  .use(convert(errorHandle()))
  .use(convert(router.routes()))
  .use(convert(router.allowedMethods()));
export default app.listen(config.port, () => {
  console.log(`App is listening on ${config.port}.`);
});
