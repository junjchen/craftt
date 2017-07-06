import {
    flow,
    isArray
} from 'lodash'

function Then(from, to) {
    if (isArray(to)) {
        return flow(from, function(){

        })
    } else {
        return flow(from, to)
    }
}

export default Then