const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar', opciones)
    .command('crear','Genera un archivo con la tabla de multiplicar de acuerdo con los parametros enviados', opciones)
    .help()
    .argv;

module.exports = {
    argv
}
