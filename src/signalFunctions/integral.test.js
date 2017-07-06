import Integral from './integral'
import {
    expect
} from 'chai'
import {
    times
} from 'lodash'

describe('Test integral signal function', function () {
    it('Remembers over course of the time', function () {
        const integral = Integral()
        times(5, function (i) {
            const {
                val
            } = integral({
                dt: 0.1,
                val: 1
            })
            expect(val).to.equal(1 + i)
        })
    })
})