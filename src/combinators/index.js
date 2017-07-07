import Then from './then'
import All from './all'
import And from './and'

function getInstance({
    type,
    sfs
}) {
    switch (type) {
        case 'then':
            {
                return Then(sfs)
            }
        case 'all':
            {
                return All(sfs)
            }
        case 'and':
            {
                return And(sfs)
            }
        default:
            throw new Error(`${type} not supported`)
    }
}

export default getInstance