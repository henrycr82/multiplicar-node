

//requieres
const fs = require('fs');
const colors = require('colors');


//el valor por defecto del limite es 10
let listarTabla = (base, limite=10) => {

    if (!Number(base)) {
        console.log(`El valor introducido: ${base.red} No es un número`);
        return;
    }

    if (!Number(limite)) {
        console.log(`El valor introducido: ${limite.red} No es un número`);
        return;
    }

    console.log('=========================='.green);
    console.log(`      Tabla del: ${base}      `.green);
    console.log('=========================='.green);
    for (var i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base*i}`);

}

let crearArchivo = (base, limite=10) => {

    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base.red} No es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido: ${limite.red} No es un número`);
            return;
        }


        let data = '';

        for (var i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-$${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
