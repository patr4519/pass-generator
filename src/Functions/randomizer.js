export function randomizer(array, lengthPass) {
    if (array.length <= 10) {
        array = [...array, ...array, ...array];
    }

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join('').slice(0, +lengthPass);
}