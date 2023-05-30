var express = require('express');
var router = express.Router();

var  Planta= require('../controllers/planta');

// GET: os vários pedidos

router.get('/api/plantas', function(req, res, next) {
    //Taking into account Parameters
    const especie = req.query.especie || "DoesntExist";
    const implant = req.query.implant || "DoesntExist";
    if(especie != "DoesntExist"){
      Planta.filteredList("especie",especie)
      .then(Plantas => {
        res.jsonp(Plantas)
      })
      .catch(erro => {
        res.json({ error: err })
      })
    }
    else if(implant != "DoesntExist"){
      Planta.filteredList("implant",implant)
      .then(Plantas => {
        res.jsonp(Plantas)
      })
      .catch(erro => {
        res.json({ error: err })
      })
    }
    else{
      Planta.list()
      .then(Plantas => {
        res.jsonp(Plantas)
      })
      .catch(erro => {
        res.json({ error: err })
      })
    }
  })

router.get('/api/plantas/:id', function(req, res) {
  Planta.findPlanta(req.params.id)
    .then(PlantaS => {
      res.jsonp(PlantaS)
    })
    .catch(erro => {
      res.json({ error: err })
    })
});

router.get('/api/freguesias', function(req, res) {
  Planta.freguesias()
    .then(freguesias => {
      res.jsonp(freguesias)
    })
    .catch(erro => {
      res.json({ error: err })
    })
});

router.get('/api/especies', function(req, res) {
  Planta.especies()
    .then(especies => {
      res.jsonp(especies)
    })
    .catch(erro => {
      res.json({ error: err })
    })
});

router.post('/api/plantas', function(req, res) {
  Planta.addPlanta(req.body)
    .then(plantaNova => {
      res.jsonp(plantaNova)
    })
    .catch(erro => {
      res.json({ error: err })
    })
})

router.delete('/api/plantas/:d', function(req, res) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de um produto"})
    })
})
module.exports = router;
