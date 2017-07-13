import {
    assign,
    each
} from 'lodash'
import {
    getSFInstance,
    getCombInstance
} from '../sfs'
import {
    getEventstreamInstance
} from '../events'

const eventStreams = {}

function Flow({
    sfs,
    evts
}) {
    each(evts, (v, k) => {
        eventStreams[k] = getEventstreamInstance(v)
    })
    return reduceSfTree(sfs)
}

function reduceSfTree({
    meta,
    left,
    right
}) {
    switch (meta.node) {
        case 'comb':
            return getCombInstance(assign({
                sfs: [reduceSfTree(left), reduceSfTree(right)],
            }, meta), eventStreams)
        case 'sf':
            return getSFInstance(meta)
        default:
            throw new Error(`${data.node} not supported`)
    }
}

export {
    Flow,
    eventStreams
}