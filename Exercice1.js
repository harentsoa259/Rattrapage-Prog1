let arr = [1, -2, 3, 0, -5, 6, -7, 8];

function NegatifPositif(arr) {
    let positif = [];
    let negatif = [];
    let accum=[]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
            positif.push(arr[i]);
        } else {
            negatif.push(arr[i]);
        }
    }
    let variable = [negatif, positif].toString();
    return variable;

   
}

console.log(NegatifPositif(arr));
