import {
    EventEmitter
} from 'events'
import {
    spy,
    assert
} from 'sinon'
import Merge from './merge'

describe('Test merge eventstreams', function () {
    it('Should emit all events from merged event sources', function () {
        const evt1 = new EventEmitter()
        const evt2 = new EventEmitter()
        const evt3 = new EventEmitter()
        const s = new spy()
        const merged = new Merge([evt1, evt2, evt3])
        merged.on('evt', s)
        evt1.emit('evt', 1)
        assert.calledWith(s, 1)
        evt2.emit('evt', 2)
        assert.calledWith(s, 2)
        evt3.emit('evt', 3)
        assert.calledWith(s, 3)
    })
})