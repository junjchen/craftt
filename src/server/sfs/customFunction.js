import stringToFunc from '../utils/stringToFunc'
import {
    trace
} from './signalEvents'

function CustomFunction(id, {
    f
}) {
    const func = stringToFunc(f)
    return ({
        dt,
        val
    }) => trace(id, {
        dt,
        val: func(val)
    })
}

export default CustomFunction