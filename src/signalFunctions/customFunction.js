import stringToFunction from 'string-to-function'
import Decimal from 'decimal.js'

function CustomFunction({f}) {
    const func = stringToFunction(f)
    return ({
        dt,
        val
    }) => ({
        dt,
        val: func(val)
    })
}

export default CustomFunction