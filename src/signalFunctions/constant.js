import Decimal from 'decimal.js'

function Constant({
    val
}) {
    const dVal = Decimal(val)

    return ({
        dt
    }) => ({
        dt,
        val: dVal.times(dt)
    })
}

export default Constant