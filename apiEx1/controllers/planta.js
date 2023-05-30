var plantas = require('../model/planta')

const agg = [
    {
      '$group': {
        '_id': '$Freguesia'
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ];

const agg2 = [
    {
      '$group': {
        '_id': '$Espécie'
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ];
// list
module.exports.list = () => {
    return plantas
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// Filtered list
module.exports.filteredList = (filter,value) => {
    switch (filter) {
        case 'especie':
            return plantas
            .find({'Espécie': value })
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
          break;
        case 'implant':
            return plantas
            .find({'Implantação': value })
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
            break
        default:
          console.log(`Sorry, filter not valid ${filter}.`);
      }
}

module.exports.findPlanta = id => {
    return plantas.findOne({Id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.freguesias = () => {
    return plantas.aggregate(agg)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.especies = () => {
    return plantas.aggregate(agg2)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = l => {
    return plantas.create(l)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return streets.deleteOne({Id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}