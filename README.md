# Benchmark JWT libs

## Results

**Fastest encoder is jwt-simple**
```
jwt-simple x 22,363 ops/sec ±6.47% (62 runs sampled)
jws x 17,553 ops/sec ±7.80% (63 runs sampled)
njwt x 10,447 ops/sec ±3.89% (60 runs sampled)
jwt-node x 8,167 ops/sec ±3.93% (65 runs sampled)
jsonwebtoken x 6,922 ops/sec ±12.83% (59 runs sampled)
```
**Fastest decoder is jwt-simple**
```
jwt-simple x 18,052 ops/sec ±6.42% (61 runs sampled)
jws x 13,914 ops/sec ±5.68% (66 runs sampled)
jwt-node x 10,776 ops/sec ±7.36% (59 runs sampled)
jsonwebtoken x 8,797 ops/sec ±2.75% (70 runs sampled)
njwt x 7,549 ops/sec ±7.34% (59 runs sampled)
```

## To test on your environment
```
git clone git@github.com:rodrigoalviani/benchmark-jwt.git
npm i
node index.js
```