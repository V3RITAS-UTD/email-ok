module.exports = (ctx, next) => {
  let key = ctx.request.headers['x-api-key']
  if (!key || key == null) {
    return ctx.throw(401, 'Missing authentication header `X-API-Key`')
  }
  let isKeyAllowed = process.env.API_KEY_LIST.indexOf(key + '') > -1
  if (isKeyAllowed === true) {
  	// you can keep track of usage here
    return next()
  }
  return ctx.throw(403)
}
