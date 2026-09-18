let table = [0, 1, 0];

function Echanger(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(Echanger(table, 1, 2));
