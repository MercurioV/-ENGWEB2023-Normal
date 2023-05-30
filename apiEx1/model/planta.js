const mongoose = require('mongoose');

const plantaSchema = new mongoose.Schema({
  Id: Number,
  'Número de Registo': Number,
  'Código derua': Number,
  Rua: String,
  Local: String,
  Freguesia: String,
  Espécie: String,
  'Nome Científico': String,
  Origem: String,
  'Data de Plantação': String,
  Estado: String,
  Caldeira: String,
  Tutor: String,
  Implantação: String,
  Gestor: String,
  'Data de actualização': String,
  'Número de intervenções': Number
});

const planta = mongoose.model('planta', plantaSchema);

module.exports = planta;