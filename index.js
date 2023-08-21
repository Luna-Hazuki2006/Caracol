const tabla = document.getElementById('caracol')
const celdas = document.getElementsByTagName('td')
const lineas = document.getElementsByTagName('tr')
const colores = [
    'red', 'crimson', 
    'firebrick', 'indianred', 
    'lightcoral', 'salmon', 
    'darksalmon', 'lightsalmon', 
    'coral', 'tomato', 
    'orangered', 'orange', 
    'gold', 'yellow', 
    'lightyellow', 'lemonchiffon', 
    'lightgoldenrodyellow', 'papayawhip', 
    'moccasin', 'peachpuff', 
    'palegoldenrod', 'khaki', 
    'darkkhaki', 'yellowgreen', 
    'darkolivegreen', 'green', 
    'darkgreen', 'greenyellow', 
    'chartreuse', 'lawngreen', 
    'lime', 'limegreen', 
    'palegreen', 'lightgreen', 
    'springgreen'
]
const direcciones = [
    'iquierda', 'abajo', 
    'derecha', 'arriba'
]

function enumerar() {
    for (let i = 0; i < lineas.length; i++) {
        let linea = lineas[i];
        for (let j = 0; j < linea.children.length; j++) {
            const celda = linea.children[j];
            console.log(celda);
            celda.id = (i + 1) + '-' + (j + 1)
        }
    }   
}

function redireccionar(direccion) {
    let actual = direcciones.indexOf(direccion)
    if (actual + 1 == direcciones.length) {
        direccion = direcciones[0]
    } else {
        direccion = direcciones[actual + 1]
    }
    return direccion
}

function rellamar(id, direccion) {
    let datos = id.split('-')
    switch (direccion) {
        case direcciones[0]:
            id = (datos[0]) + '-' + (Number(datos[1]) + 1)
            break;
        case direcciones[1]:
            id = (Number(datos[0]) + 1) + '-' + (datos[1])
            break
        case direcciones[2]: 
            id = (datos[0]) + '-' + (Number(datos[1]) - 1)
            break
        case direcciones[3]: 
            id = (Number(datos[0]) - 1) + '-' + (datos[1])
            break
        default: 
            console.log('Algo está MUY mal');
            console.log(id);
            console.log(direccion);
            break
    }
    return id
}

function rellenar() {
    let inicio = celdas[0]
    let direccion = direcciones[0]
    let id = inicio.id
    let original = id
    console.log(celdas.length);
    for (let i = 0; i < celdas.length; i++) {
        console.log(i);
        inicio.style.backgroundColor = colores[i]
        inicio = document.getElementById(id)
        if (inicio != undefined && inicio.innerText == '') {
            inicio.innerText = i + 1
            inicio.style.backgroundColor = colores[i]
            original = id
        } else {
            direccion = redireccionar(direccion)
            id = rellamar(original, direccion)
            inicio = document.getElementById(id)
            if (inicio == undefined || inicio.innerText != '') {
                console.log(id);
                console.log(direccion);
                return
            } else {
                inicio.innerText = i + 1
                inicio.style.backgroundColor = colores[i]
            }
        }
        id = rellamar(id, direccion)
    }
}

enumerar()
rellenar()