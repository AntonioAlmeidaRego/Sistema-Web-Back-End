var express = require('express');
var router = express.Router();
var veiculoModel = require("../public/app/model/VeiculoModel").veiculo;
/* GET home page. */
router.get('/', function(req, res, next) {
  const veiculo = veiculoModel;
  veiculo.id = 25;
  veiculo.valor = "R$ 92.799,00";
  veiculo.modelo = "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut";
  veiculo.anoModelo = "2014";
  veiculo.combustivel = "Diesel";
  veiculo.codigoFipe = "005340-6";
  veiculo.mesReferencia = "setembro de 2019";
  veiculo.tipoVeiculo = "1";
  veiculo.siglaCombustivel = "D";
  veiculo.data = new Date();


  res.json([
    veiculo,
  ]);
});

module.exports = router;
