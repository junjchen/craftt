import Constant from './constant'
import CustomFunction from './customFunction'
import Identity from './identity'
import Integral from './integral'

function getInstance({
    type,
    params
}) {
    switch (type) {
        case 'constant':
            {
                return Constant(params)
            }
        case 'integral':
            {
                return Integral()
            }
        case 'identity':
            {
                return Identity()
            }
        case 'customFunction':
            {
                return CustomFunction(params)
            }
        default:
            throw new Error(`${type} not supported`)
    }
}

export default getInstance