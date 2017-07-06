function Integral() {
    let m = 0
    return ({
        dt,
        val
    }) => ({
        dt,
        val: m = m + val
    })
}

export default Integral