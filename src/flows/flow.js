import getSFInstance from '../signalFunctions'
import getCombInstance from '../combinators'

function Flow({
    data,
    left,
    right
}) {
    switch (data.node) {
        case 'comb':
            return getCombInstance({
                type: data.type,
                sfs: [Flow(left), Flow(right)]
            })
        case 'sf':
            return getSFInstance(data)
        default:
            throw new Error(`${data.node} not supported`)
    }
}

export default Flow