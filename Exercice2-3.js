let table =[0, 0, 0, 0, 1, 1];

function NombreUn(){
    let compteur = 0;
    for (let i = 0; i < table.length; i++) {
        if (table[i] === 1) {
            compteur++;
        }
    }
    return compteur;
}

console.log(NombreUn(table));