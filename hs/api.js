var hsapi = require("./hs")

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/school/articleNews/:page', async (ctx, next) => {
  page = ctx.params["page"]
  let data = await hsapi.school_topArticleNews("1", page)
  ctx.body = data
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('route-use-middleware is starting at port 3000')
})
