import Decimal from 'decimal.js'

function Constant({
    val
}) {
    return ({
        dt
    }) => ({
        dt,
        val: Decimal(val).times(dt).toNumber()
    })
}

export default Constant