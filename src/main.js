import {
    readFile
} from 'fs'
import {
    join
} from 'path'
import {
    Tick
} from './io'
import {
    Flow
} from './flows'

readFile(join(__dirname, './flows/fixture1.json'), (err, data) => {

    const flow = Flow(JSON.parse(data))
    const tick = Tick(100)

    tick.on('tick', t => {
        const s = flow(t)
        console.log(s.dt + ' -> ' + s.val)
    })

})