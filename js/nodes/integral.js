function Integral() {
    let m = 0
    return ({
        dt,
        val = 0
    }) => ({
        dt: 1,
        val: m + val * dt
    })
}

export default Integral