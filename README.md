# email-ok

API to check if an email is from a disposable email service


## Install

`yarn install` or `npm install`

This will also download the latest domain list

## Run

`yarn start` or `npm run start`

Endpoint will be available on `localhost:3000/check/:email`

Quick use: `curl http://localhost:3000/check/test@fast-mail.one`

---

To re-fetch the domain list run `yarn postinstall` or `npm run postinstall` - this can be done via a cronjob every 2 days to keep the domain list updated

## Test

`yarn test` or `npm run test`

Tests can be found in `test/test.js`, using Tape + Supertest

## Credits

Domain list is loaded from [yzyjim/disposable-email-domain-list](https://github.com/yzyjim/disposable-email-domain-list/)


#### MIT License
