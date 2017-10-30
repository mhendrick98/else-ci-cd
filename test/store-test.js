'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

function hello(name, cb) {
  cb('hello ' + name);
}

describe('hello', () => {
  it('should call callback with correct greeting', () => {
    const cb = sinon.spy();

    hello('foo', cb);

    expect(cb).to.have.been.calledWith('hello foo');
  });
});