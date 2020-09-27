# Overview

This repo is used for testing [Sổ tay chém gió](https://sotaychemgio.com)
- Link for full document: [puppeteer](https://github.com/GoogleChrome/puppeteer)
- Another document from dev google: [puppeteer](https://developers.google.com/web/tools/puppeteer/)

## Deploy on local

1. Can copy from *.env.example* then update the corresponding data.

2. Install packages

```
npm install
```

3. Run tests

```
npm run jest
```

3+. Run a specific case

```
node_modules/.bin/jest --runInBand src/tests/favorite-feature.spec.ts
```
