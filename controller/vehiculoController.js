const connection = require('./../database.js');

exports.dameVehiculos = (req, res) => {

    respuesta = connection.execute(
        'SELECT * FROM `vehiculos` LIMIT 200',
        function(err, results, fields) {
            res.json(results);
        }
    );

}