const LIST_URL = 'https://raw.githubusercontent.com/yzyjim/disposable-email-domain-list/master/domains.json'
const DOWNLOAD_PATH = './src/domains.json'
const request = require('request');
const fs = require('fs')

request(LIST_URL, { json: true }, (err, res, body) => {
  if (err) {
  	return console.error('Error while getting the domain list', err);
  }
  if (typeof body == 'string' || body instanceof Array == false) {
  	return console.error('Domain list from github is not valid, got:', body)
  }
  fs.writeFileSync(DOWNLOAD_PATH, JSON.stringify(body), 'utf8')
  console.log(`Domain list ${DOWNLOAD_PATH} updated`)
})