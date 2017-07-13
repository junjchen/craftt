import {
    trace
} from './signalEvents'

function Identity(id) {
    return x => trace(id, x)
}

export default Identity