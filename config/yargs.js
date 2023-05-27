const argv = require('yargs').option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  desc: 'Es la base de la tabla de multiplicar'
})    
.option('l', {
  alias: 'listar',
  type: 'boolean',
  demandOption: false,
  desc: 'Muestra la tabla en la consola'

}) 
.option('h', {
  alias: 'Hasta',
  type: 'number',
  default: 10,
  desc: 'Hasta que numero llega'

})     
.check((argv, options) => {
  if (isNaN(argv.b)){
    throw `La base debe ser numerica`
  }
  return true
})                       
.argv;

module.exports = argv;