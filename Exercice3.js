let M = [ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
];

function Echanger(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

function NombreUn(table){
    let compteur = 0;
    for (let i = 0; i < table.length; i++) {
        if (table[i] === 1) {
            compteur++;
        }
    }
    return compteur;
}

function triLignes(M) {
    for (let i = 0; i < M.length - 1; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (NombreUn(M[i]) > NombreUn(M[j])) {
                Echanger(M, i, j);
            }
        }
    }
    const final = M;
    return final;
}
console.log(triLignes(M));

