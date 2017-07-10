import {
    EventEmitter
} from 'events'
import {
    each
} from 'lodash'

function Tick(interval) {
    const tick = new EventEmitter()
    const intervalInSec = interval / 1000
    setInterval(() => {
        tick.emit('tick', {
            dt: intervalInSec
        })
    }, interval)
    return tick
}

export default Tick