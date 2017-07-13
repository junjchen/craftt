import {
    EventEmitter
} from 'events'

const signalEvents = new EventEmitter()
function trace(id, payload) {
    signalEvents.emit(id, payload)
    return payload
}

export {
    trace,
    signalEvents
}