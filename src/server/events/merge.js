import {
    EventEmitter
} from 'events'
import {
    each
} from 'lodash'

function Merge(evtStreams) {
    const merged = new EventEmitter()
    each(evtStreams, evtStream => {
        evtStream.on('evt', e => {
            merged.emit('evt', e)
        })
    })
    return merged
}

export default Merge