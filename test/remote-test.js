'use strict';

import Remote from '../src/remote';


const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

let xhr, requests;
let remote;

beforeEach(() => {
  xhr = sinon.useFakeXMLHttpRequest();
  requests = [];
  xhr.onCreate = function (req) { requests.push(req); };
  global.XMLHttpRequest = xhr;

  remote = new Remote();
});

afterEach(() => {
  xhr.restore();
});

describe('Remote Storage get', () => {

  it('should call callback', () => {
    const cb = sinon.spy();
    remote.get({foo: 'bar'}, 'localhost', cb);

    requests[0].respond(
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify([{ id: 1, title: 'Finish demo', completed: true }])
    );

    expect(cb).to.have.been.calledOnce;
  });
});