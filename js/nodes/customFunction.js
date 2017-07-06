function CustomFunction(f) {
    return ({
        dt,
        val
    }) => ({
        dt,
        val: f(val)
    })
}

export default CustomFunction