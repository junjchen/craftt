import stringToFunction from 'string-to-function'
import Decimal from 'decimal.js'

function stringToFunc(str) {
    const func = stringToFunction(str)
    return x => func(x, Decimal)
}

export default stringToFunc