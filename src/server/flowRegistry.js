import md5 from 'blueimp-md5'
import {
    EventEmitter
} from 'events'
import {
    Flow
} from './flows'

const flows = {}

function newFlow(json) {
    const digest = md5(json)
    flows[digest] = Flow(json)
    return digest
}

function runFlow({
    id,
    signalIn
}) {
    const flow = flows[id]
    const signalOut = new EventEmitter()
    signalIn.on('in', e => {
        signalOut.emit('out', flow(e))
    })
    return signalOut
}

export {
    newFlow,
    runFlow
}