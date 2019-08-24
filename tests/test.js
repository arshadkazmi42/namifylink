const { expect } = require('chai');

const namifyLink = require('../index');


describe('tests domain name fetching from url', () => {
  it('should return domain as filename', () => {
    expect(namifyLink('https://github.com/arshadkazmi42')).to.equal('github-com');
    expect(namifyLink('https://mail.google.com/arshadkazmi42')).to.equal('mail-google-com');
    expect(namifyLink('https://medium.com/@vanya_cohen/opengpt-2-we-replicated-gpt-2-because-you-can-too-45e34e6d36dc')).to.equal('medium-com');
  });
  it('should throw error', () => {
    try {
      namifyLink();
    } catch (err) {
      expect(err.message).to.equal('Invalid URL');
    }

    try {
      namifyLink('http://');
    } catch (err) {
      expect(err.message).to.equal('Invalid URL');
    }

    try {
      namifyLink('arshad');
    } catch (err) {
      expect(err.message).to.equal('Invalid URL');
    }
  });
});
