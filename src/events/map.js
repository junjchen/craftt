import {
    EventEmitter
} from 'events'
import stringToFunc from '../utils/stringToFunc'

function Map(evtStream, {
    f
}) {
    const mapped = new EventEmitter()
    const func = stringToFunc(f)
    evtStream.on('evt', e => {
        mapped.emit('evt', func(e))
    })
    return mapped
}

export default Map