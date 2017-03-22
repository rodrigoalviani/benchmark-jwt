'use strict';

const Benchmark = require('benchmark');

const encode = new Benchmark.Suite;
const decode = new Benchmark.Suite;

const jwtsimple = require('jwt-simple');
const jsonwebtoken = require('jsonwebtoken');
const njwt = require('njwt');
const jwtnode = require('jwt-node');

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
  .add('encode jwt-simple', () => {
    token.jwtsimple = jwtsimple.encode(payload, secret);
  })
  .add('encode jsonwebtoken', () => {
    token.jsonwebtoken = jsonwebtoken.sign(payload, secret);
  })
  .add('encode njwt', () => {
    token.njwt = njwt.create(payload, secret).compact();
  })
  .add('encode jwt-node', () => {
    token.jwtnode = jwtnode.create(payload, secret).compact();
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name') + "\n") })
  .run({ 'async': false });

decode
  .add('decode jwt-simple', () => {
    jwtsimple.decode(token.jwtsimple, secret);
  })
  .add('decode jsonwebtoken', () => {
    jsonwebtoken.verify(token.jsonwebtoken, secret);
  })
  .add('decode njwt', () => {
    njwt.verify(token.njwt, secret);
  })
  .add('decode jwt-node', () => {
    jwtnode.verify(token.jwtnode, secret);
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () { console.log('Fastest is ' + this.filter('fastest').map('name') + "\n"); })
  .run({ 'async': false });
