const blacklist = require('./domains.json')

module.exports = (ctx, email) => {
  // we need to check the domain only
  let domain = email
  // check if is an email address or is just a domain
  if (email.indexOf('@') > -1) {
    domain = email.split('@')[1].trim()
  }
  // check if is a valid domain
  if (domain.indexOf('.') === -1) {
    return ctx.throw(
      400,
      `Domain ${domain} from email address ${email} not valid, please try again`
    )
  }
  ctx.body = {
    disposable: blacklist.indexOf(domain) > -1
  }
}
