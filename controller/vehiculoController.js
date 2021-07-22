const connection = require('./../database.js');


// ========================
// Retorna todos los vehiculos (Con un limite de 200 para simplificar)
// ========================
exports.dameVehiculos = (req, res) => {
    connection.execute(
        'SELECT * FROM `vehiculos` LIMIT 200',
        function(err, results, fields) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            res.json(results);
        }
    );

}

// ========================
// Retorna los vehiculos dado un parametro de busqueda
// ========================
exports.dameVehiculo = (req, res) => {
    vehiculo = req.params.q;
    connection.execute(
        'SELECT * FROM `vehiculos` WHERE `Vehiculo` = ? LIMIT 100', [vehiculo],
        function(err, results, fields) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            res.json(results);
        }
    );

}

// ========================
// Retorna detalles del vehículo dado un id
// ========================
exports.dameVehiculoID = (req, res) => {
    id = req.params.id;
    respuesta = connection.execute(
        'SELECT * FROM `vehiculos` WHERE `IdVehiculo` = ?', [id],
        function(err, results, fields) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            res.json(results);
        }
    );

}

// ========================
// Crea un nuevo vehiculo
// ========================
exports.altaVehiculo = (req, res) => {

    console.log('body es : ', req.body);

    Vehiculo = req.body.Vehiculo;
    Marca = req.body.Marca;
    Ano = req.body.Ano;
    Descripcion = req.body.Descripcion;
    Vendido = req.body.Vendido;


    respuesta = connection.execute(
        'INSERT INTO vehiculos (Vehiculo,Marca,Ano,Descripcion,Vendido,Created,Updated) VALUES (?,?,?,?,?,NOW(),NOW())', [Vehiculo, Marca, Ano, Descripcion, Vendido],
        function(err) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            return res.json({
                mensaje: 'Vehiculo creado con exito'
            });
        }
    );

}