'use strict';

const Benchmark = require('benchmark');

const encode = new Benchmark.Suite;
const decode = new Benchmark.Suite;

const jwtsimple = require('jwt-simple');
const jsonwebtoken = require('jsonwebtoken');
const njwt = require('njwt');
const jwtnode = require('jwt-node');
const jws = require('jws');

let token = {};
let secret = 'my53cr3tv4r';
let payload = {
  foo: 'bar',
  baz: 'qux',
  quux: 'corge',
  grault: {
    garply: 'waldo',
    fred: [
      'plugh',
      'xyzzy',
      'thud'
    ]
  }
};

encode
  .add('jwt-simple', () => {
    token.jwtsimple = jwtsimple.encode(payload, secret);
  })
  .add('jsonwebtoken', () => {
    token.jsonwebtoken = jsonwebtoken.sign(payload, secret);
  })
  .add('njwt', () => {
    token.njwt = njwt.create(payload, secret).compact();
  })
  .add('jwt-node', () => {
    token.jwtnode = jwtnode.create(payload, secret).compact();
  })
  .add('jws', () => {
    token.jws = jws.sign({header: {alg: 'HS256'}, payload: payload, secret: secret});
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest encoder is ' + this.filter('fastest').map('name') + "\n") })
  .run({ 'async': false });

decode
  .add('jwt-simple', () => {
    jwtsimple.decode(token.jwtsimple, secret);
  })
  .add('jsonwebtoken', () => {
    jsonwebtoken.verify(token.jsonwebtoken, secret);
  })
  .add('njwt', () => {
    njwt.verify(token.njwt, secret);
  })
  .add('jwt-node', () => {
    jwtnode.verify(token.jwtnode, secret);
  })
  .add('jws', () => {
    if (jws.verify(token.jws, 'HS256', secret))
      jws.decode(token.jws);
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest decoder is ' + this.filter('fastest').map('name') + "\n"); })
  .run({ 'async': false });
