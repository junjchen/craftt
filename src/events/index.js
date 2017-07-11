import Map from './map'
import Merge from './merge'
import FromSignal from './fromSignal'

function getEventstreamInstance({
    type,
    params
}) {
    switch (type) {
        case 'fromSignal':
            {
                return FromSignal(params)
            }
        default:
            throw new Error(`${type} not supported`)
    }
}

export {
    getEventstreamInstance
}