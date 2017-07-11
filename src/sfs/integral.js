import Decimal from 'decimal.js'
import {
    trace
} from '../bus'

function Integral(id) {
    let m = 0
    return ({
        dt,
        val
    }) => trace(id, {
        dt,
        val: m = Decimal(m).plus(val).toNumber()
    })
}

export default Integral