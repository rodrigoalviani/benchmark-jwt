# Benchmark JWT libs

## Results

**Fastest is encode jwt-simple**
```
encode jwt-simple x 24,890 ops/sec ±2.71% (70 runs sampled)
encode njwt x 12,379 ops/sec ±2.65% (73 runs sampled)
encode jwt-node x 9,594 ops/sec ±2.70% (70 runs sampled)
encode jsonwebtoken x 8,292 ops/sec ±6.40% (68 runs sampled)
```
**Fastest is decode jwt-simple**
```
decode jwt-simple x 21,946 ops/sec ±2.25% (73 runs sampled)
decode jwt-node x 10,913 ops/sec ±3.88% (69 runs sampled)
decode jsonwebtoken x 9,115 ops/sec ±2.95% (69 runs sampled)
decode njwt x 8,540 ops/sec ±3.44% (70 runs sampled)
```

## To test on your environment
```
git clone git@github.com:rodrigoalviani/benchmark-jwt.git
npm i
node index.js
```
