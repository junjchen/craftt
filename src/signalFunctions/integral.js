import Decimal from 'decimal.js'

function Integral() {
    let m = Decimal(0)
    return ({
        dt,
        val
    }) => ({
        dt,
        val: m = m.plus(val)
    })
}

export default Integral