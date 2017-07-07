function All([sf1, sf2]) {
    return ({
        dt,
        val
    }) => ({
        dt,
        val: [sf1({
            dt,
            val: val[0]
        }).val, sf2({
            dt,
            val: val[1]
        }).val]
    })
}

export default All