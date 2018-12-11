const assert = require('assert')
const {adder, multiplier} = require('./src')

const add3 = adder(3)
assert.strictEqual(typeof add3, 'function')
assert.strictEqual(add3(6), 9)
assert.strictEqual(add3(15), 18)

const mult4 = multiplier(4)
assert.strictEqual(typeof mult4, 'function')
assert.strictEqual(mult4(6), 24)
assert.strictEqual(mult4(15), 60)
