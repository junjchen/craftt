import {
    EventEmitter
} from 'events'

function Sensor(interval = 100) {
    const sensor = new EventEmitter()
    setInterval(_ => {
        sensor.emit('in', {
            dt: interval / 1000,
            val: Math.random()
        })
    }, interval)
    return sensor
}

export default Sensor