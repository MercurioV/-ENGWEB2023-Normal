var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(env.apiAccessPoint+"/plantas")
    .then(response => {
      res.render('index', { list: response.data});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});
router.get('/:id', function(req, res, next) {
  axios.get(env.apiAccessPoint+"/plantas/"+req.params.id)
    .then(response => {
      res.render('viewPlanta', { planta: response.data});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});
router.get('/especies/:nome', function(req, res, next) {
  nome = req.params.nome.replace("%20"," ")
  axios.get(env.apiAccessPoint+"/plantas/?especie="+nome)
    .then(response => {
      console.log(response.data)
      res.render('especie', { list: response.data, especie:nome});
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});
module.exports = router;
