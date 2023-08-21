const tabla = document.getElementById('caracol')
const celdas = document.getElementsByTagName('td')
const lineas = document.getElementsByTagName('tr')
for (let i = 0; i < lineas.length; i++) {
    let linea = lineas[i];
    for (let j = 0; j < linea.children.length; j++) {
        const celda = linea.children[j];
        console.log(celda);
        celda.id = (i + 1) + '-' + (j + 1)
    }
    let falso = linea.children[linea.children.length]
    console.log(falso);
    console.log(falso == undefined);
}
// for (let i = 0; i < celdas.length; i++) {
//     let celda = celdas[i]
//     celda.id = i + 1
// }