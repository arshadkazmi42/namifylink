# namifylink

[![Build](https://github.com/arshadkazmi42/namifylink/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/namifylink/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/namifylink.svg)](https://www.npmjs.com/package/namifylink)
[![NPM Downloads](https://img.shields.io/npm/dt/namifylink.svg)](https://www.npmjs.com/package/namifylink)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/namifylink.svg)](https://github.com/arshadkazmi42/namifylink)
[![LICENSE](https://img.shields.io/npm/l/namifylink.svg)](https://github.com/arshadkazmi42/namifylink/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/namifylink.svg)](https://github.com/arshadkazmi42/namifylink/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/namifylink.svg)](https://github.com/arshadkazmi42/namifylink/commits/master)


[![Build](https://github.com/arshadkazmi42/namifylink/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/namifylink/actions/workflows/nodejs.yml)

Get domain name from url

## Install

```
npm i namifylink
```

## Usage

```javascript

const namifyLink = require('namifylink');

const fileName = namifyLink('https://github.com/arshadkazmi42');
console.log(fileName);

// Output
// github-com


const fileName = namifyLink('https://mail.google.com/arshadkazmi42');
console.log(fileName);

// Output
// mail-google-com

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/namifylink/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

