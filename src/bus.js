import {
    EventEmitter
} from 'events'

const bus = new EventEmitter()

function trace(id, payload) {
    bus.emit(id, payload)
    return payload
}

export {
    trace,
    bus
}