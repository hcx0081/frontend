async function pro() {
    throw new Error('j');
}

function pro() {
    return Promise.resolve(1);
}
