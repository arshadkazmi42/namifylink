const Domain = require('url-domain-name');

module.exports = (url) => {
  const domainName = Domain.from(url);
  if (!domainName) {
    throw new Error('Invalid URL');
  }

  return domainName.replace(/\./g, '-');
};
