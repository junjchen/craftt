import Decimal from 'decimal.js'

function Integral() {
    let m = 0
    return ({
        dt,
        val
    }) => ({
        dt,
        val: m = Decimal(m).plus(val).toNumber()
    })
}

export default Integral