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

export function unshift(array, item) {
    array.length = array.length + 1;
    let counter = 0;
    for (let i = array.length; i >= 0; i--) {
        array[counter] = array[i];
        counter--;
    }
    array[0] = item;
    return array.length;
}

export function some(array, myFunction) {
    // esta es la progresión para crear la función:
    // let blablabla = 9;
    // //myFunction(blablabla);
    // let blablabla2 = myFunction(blablabla);
    // let blablabla3 = myFunction(array[0]);
    // if (blablabla3 === true) {
    //     return true;
    // }
    // let blablabla4 = myFunction(array[1]);
    // if (blablabla4 === true) {
    //     return true;
    // }
    // let blablabla5 = myFunction(array[2]);
    // if (blablabla5 === true) {
    //     return true;
    // }
    // return false;
    for (let i = 0; i < array.length; i++) {
        let blablabla6 = myFunction(array[i]);
        if (blablabla6 === true) {
            return true;
        }
    }
    return false;
}

// esto son pruebas y refactorización de la función:
//let array = [1, 2, 3, 8, 4, 5];
// function myFunction(algo) {
//     return algo > 5; //porque algo>5 sólo puede dar verdadero o falso ;
// }

// const myFunction2 = (algo) => algo > 5;
// console.log(some(array, myFunction));

export function every(array, myFunction) {
    for (let i = 0; i < array.length; i++) {
        let blablabla6 = myFunction(array[i]);
        if (blablabla6 === false) {
            return false;
        }
    }
    return true;
}

export function find(array, myFunction) {
    for (let i = 0; i < array.length; i++) {
        if (myFunction(array[i]) === true) {
            return array[i];
        }
    }
    return false;
}

export function filter(array, myFunction) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (myFunction(array[i] === true)) {
            push(newArray, array[i]);
        }
    }
    return newArray;
}
