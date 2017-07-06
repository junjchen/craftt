function Constant(val) {
    return ({
        dt
    }) => ({
        dt,
        val: val * dt
    })
}

export default Constant