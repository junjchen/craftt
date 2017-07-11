import {
    trace
} from '../bus'

function Identity(id) {
    return x => trace(id, x)
}

export default Identity