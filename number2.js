/*У нас есть массив строк arr. Нужно получить отсортированную копию, но
оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию. */


function copyStored(arr) {
    return arr.slice().sort();
}

let arr = [33,11,22];

let stored = copyStored(arr);

alert(stored);


