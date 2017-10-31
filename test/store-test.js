'use strict';

import Store from '../src/store';

global.window = {};
import localStorage from 'mock-local-storage';
// noinspection JSAnnotator
window.localStorage = global.localStorage;

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

function hello(name, cb) {
  cb('hello ' + name);
}

describe('hello', () => {
  it.skip('should call callback with correct greeting', () => {
    const cb = sinon.spy();

    hello('foo', cb);

    expect(cb).to.have.been.calledWith('hello foo');
  });
});


let store;

beforeEach(() => {
  store = new Store('test');
});

afterEach(() => {
  window.localStorage.clear();
  // remove callback
  window.localStorage.itemInsertionCallback = null;
});

describe('Local Storage insert', () => {

  it('should call callback when set', () => {
    const cb = sinon.spy();

    store.insert('test', cb);

    expect(cb).to.have.been.called;
  });

  it('should call setLocalStorage with the parameter wrapped in array', () => {
    sinon.spy(store, 'setLocalStorage');
    const data = {foo: 'bar'};

    store.insert(data);

    expect(store.setLocalStorage).to.have.been.calledWith([data]);
  });
});