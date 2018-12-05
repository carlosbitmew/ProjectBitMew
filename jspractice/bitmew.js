function num() {
    return arguments.length;
}

function sum(...rest) {
    let len = arguments.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += rest[i];
    }
    return sum;
}