function And([sf1, sf2]) {
    return s => ({
        dt: s.dt,
        val: [sf1(s).val, sf2(s).val]
    })
}

export default And