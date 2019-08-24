# namifylink

[![Build](https://img.shields.io/travis/com/arshadkazmi42/namifylink.svg)](https://travis-ci.com/arshadkazmi42/namifylink/)

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

## API

- **from(url)**
  - Returns domain name from input url

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/namifylink/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
