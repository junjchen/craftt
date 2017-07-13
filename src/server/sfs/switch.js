function Switch([defaultSf, switchToSf], {
    evt
}, eventStreams) {
    let sf = defaultSf
    eventStreams[evt].once('evt', e => {
        sf = switchToSf
    })
    return x => sf(x)
}

export default Switch