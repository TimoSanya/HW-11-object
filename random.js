function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min))
}

export {
    getRandomNumber
}
