import express from 'express'
import {
    createServer
} from 'http'
import bodyParser from 'body-parser'
import {
    newFlow,
    runFlow
} from './flowRegistry'
import {
    Sensor
} from './simulators'

const app = express()
app.use(bodyParser.json())

const server = createServer(app)
app.get('/', (req, res, next) => {
    res.send('hello')
})
app.post('/flows', (req, res, next) => {
    const f = newFlow(req.body)
    const runner = runFlow({
        id: f,
        signalIn: Sensor(1000)
    })
    runner.on('out', x => console.log(x))
    res.send(f)
})

server.listen(8888)