import {
    readFileSync
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
import {
    Flow
} from './flow'

let f1, f2
before('Read fixture file', function () {
    f1 = JSON.parse(readFileSync(join(__dirname, './fixture1.json')))
    f2 = JSON.parse(readFileSync(join(__dirname, './fixture2.json')))
})
describe('Test Flow tree reduction', function () {
    it('Reduce tree 1', function () {
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
                val: [4.2, 14.2]
            },
            {
                dt: 0.1,
                val: [8.4, 22.6]
            },
            {
                dt: 0.1,
                val: [12.6, 35.2]
            },
            {
                dt: 0.1,
                val: [16.8, 52]
            },
            {
                dt: 0.1,
                val: [21, 73]
            },
        ])
    })
    it('Reduce tree 2', function () {
        const flow = Flow(f2)
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
                val: 2.2
            },
            {
                dt: 0.1,
                val: 3.4
            },
            {
                dt: 0.1,
                val: 4.6
            },
            {
                dt: 0.1,
                val: 6.8
            },
            {
                dt: 0.1,
                val: 8.0
            },
        ])
    })
})