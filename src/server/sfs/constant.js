import Decimal from 'decimal.js'
import {
    trace
} from './signalEvents'

function Constant(id, {
    val
}) {
    return ({
        dt
    }) => trace(id, {
        dt,
        val: Decimal(val).times(dt).toNumber()
    })
}

export default Constant