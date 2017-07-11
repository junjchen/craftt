import {
    EventEmitter
} from 'events'
import {
    bus
} from '../bus'
import stringToFunc from '../utils/stringToFunc'

function FromSignal({
    from,
    f
}) {
    const eventStream = new EventEmitter()
    const func = stringToFunc(f)
    bus.on(from, e => {
        const v = func(e.val)
        if (v) {
            eventStream.emit('evt', v)
        }
    })
    return eventStream
}

export default FromSignal