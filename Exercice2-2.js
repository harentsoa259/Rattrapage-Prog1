let arr = [0, 1, 0, 0, 1, 0];

function Echanger(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function Ranger(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                Echanger(arr, i, j);
            }
        }
    }
    return arr;
}
console.log(Ranger(arr));
