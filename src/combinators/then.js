import {
    flow,
} from 'lodash'

function Then(from, to) {
    return flow(from, to)
}

export default Then