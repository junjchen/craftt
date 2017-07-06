import CustomFunction from './customFunction'
import {
    expect
} from 'chai'

describe('Test string function parse', function () {
    it('Parses and invokes the correct function', function () {
        const fstr = 'function(val) {return val + 20;}'
        const f = CustomFunction(fstr)
        const {
            dt,
            val
        } = f({
            dt: 0.1,
            val: 1
        })
        expect(val).to.equal(21)
    })
})