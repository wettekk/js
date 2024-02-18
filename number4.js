/*Дан массив с числами. Найдите сумму положительных элементов этого массива.
 */

let arr = [-6, 3, -20, 8, 10, 33, 22, -15];
let result = 0;
for (let i = 0; i < 8; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
console.log(result)