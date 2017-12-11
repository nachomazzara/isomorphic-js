# isomorphic-js
Code sample using reactJS - NodeJS

### Before run!!!!!

 - Go to https://apps.twitter.com and register a new app
 - Fill `/app/server/config.js` with your twitter credentials

```javascript
const config = {
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}
```

### Run sample
```bash
yarn install
yarn run start:dev
```

Then open localhost:3333/ at your browser


### Run tests
```bash
yarn run test
```

### TODO: 
-   React router navigation with SSR
-   Test Asyn/Await controllers
