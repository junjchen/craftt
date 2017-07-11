import {
    EventEmitter
} from 'events'
import {
    spy,
    assert
} from 'sinon'
import Map from './Map'

describe('Test map eventstream value', function () {
    it('Should map value over stream', function () {
        const evt1 = new EventEmitter()
        const f = 'function(e){return e + 1}'
        const s = new spy()
        const mapped = new Map(evt1, {
            f
        })
        mapped.on('evt', s)
        evt1.emit('evt', 1)
        assert.calledWith(s, 2)
    })
})