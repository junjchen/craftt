import Constant from './constant'
import CustomFunction from './customFunction'
import Identity from './identity'
import Integral from './integral'
import Then from './then'
import All from './all'
import And from './and'
import Switch from './switch'
import {
    signalEvents
} from './signalEvents'

function getSFInstance({
    id,
    type,
    params
}) {
    switch (type) {
        case 'constant':
            {
                return Constant(id, params)
            }
        case 'integral':
            {
                return Integral(id)
            }
        case 'identity':
            {
                return Identity(id)
            }
        case 'customFunction':
            {
                return CustomFunction(id, params)
            }
        default:
            throw new Error(`${type} not supported`)
    }
}

function getCombInstance({
    type,
    sfs,
    params
}, eventStreams) {
    switch (type) {
        case 'then':
            {
                return Then(sfs)
            }
        case 'all':
            {
                return All(sfs)
            }
        case 'and':
            {
                return And(sfs)
            }
        case 'switch':
            {
                return Switch(sfs, params, eventStreams)
            }
        default:
            throw new Error(`${type} not supported`)
    }
}


export {
    getSFInstance,
    getCombInstance,
    signalEvents
}