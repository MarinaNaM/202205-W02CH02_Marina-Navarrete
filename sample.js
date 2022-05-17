// [🍎, 🍎, 🍎, 🍎].lenght() => 4

export function arrayLenght(array) {
    return array.length;
}

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

export function pop(array) {
    let item = array[array.length - 1];
    array.length = array.length - 1;
    return item;
}

export function shift(array) {
    let item = array[0];
    let counter = 0;
    for (let i = 1; i < array.lenght; i++) {
        array[counter] = array[i];
    }
    pop(array);
    return item;
}
