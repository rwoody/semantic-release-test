const assert = require('assert')
const {adder} = require('./src')

const add3 = adder(3)

assert.strictEqual(typeof add3, 'function')
assert.strictEqual(add3(6), 9)
assert.strictEqual(add3(15), 18)
