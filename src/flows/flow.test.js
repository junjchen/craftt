import {
    readFile
} from 'fs'
import {
    join
} from 'path'
import {
    expect
} from 'chai'
import {
    map
} from 'lodash'
import Decimal from 'decimal.js'
import Flow from './flow'

let f1
before('Read fixture file', function (done) {
    readFile(join(__dirname, './fixture1.json'), (err, data) => {
        f1 = JSON.parse(data)
        done()
    })
})
describe('Test Flow tree reduction', function () {
    it('Reduce tree', function () {
        const flow = Flow(f1)
        const sigIn = [{
                dt: 0.1
            },
            {
                dt: 0.1
            },
            {
                dt: 0.1
            },
            {
                dt: 0.1
            },
            {
                dt: 0.1
            }
        ]
        const out = map(sigIn, s => flow(s))
        expect(out).to.deep.equal([{
                dt: 0.1,
                val: [Decimal(4.2), Decimal(14.2)]
            },
            {
                dt: 0.1,
                val: [Decimal(8.4), Decimal(22.6)]
            },
            {
                dt: 0.1,
                val: [Decimal(12.6), Decimal(35.2)]
            },
            {
                dt: 0.1,
                val: [Decimal(16.8), Decimal(52)]
            },
            {
                dt: 0.1,
                val: [Decimal(21), Decimal(73)]
            },
        ])
    })
})