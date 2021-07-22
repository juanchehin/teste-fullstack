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

// ========================
// Actualiza un vehiculo dado su id
// ========================
exports.actualizaVehiculo = (req, res) => {

    IdVehiculo = req.params.id;
    Vehiculo = req.body.Vehiculo;
    Marca = req.body.Marca;
    Ano = req.body.Ano;
    Descripcion = req.body.Descripcion;
    Vendido = req.body.Vendido;
    Created = req.body.Created;


    respuesta = connection.execute(
        'UPDATE vehiculos SET Vehiculo = ?,Marca = ?,Ano = ?,Descripcion = ?,Vendido = ?,Created = ?,Updated = NOW() WHERE IdVehiculo = ?', [Vehiculo, Marca, Ano, Descripcion, Vendido, Created, IdVehiculo],
        function(err) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            return res.json({
                mensaje: 'Vehiculo actualizado con exito'
            });
        }
    );

}

// ========================
// Actualiza algunos datos de un vehiculo dado su id
// ========================
exports.actualizaAlgunosVehiculo = (req, res) => {

    IdVehiculo = req.params.id;
    Vehiculo = req.body.Vehiculo || null;
    Marca = req.body.Marca || null;
    Ano = req.body.Ano || null;
    Descripcion = req.body.Descripcion || null;
    Vendido = req.body.Vendido || null;
    Created = req.body.Created || null;


    respuesta = connection.execute(
        'UPDATE vehiculos SET Vehiculo = ?,Marca = ?,Ano = ?,Descripcion = ?,Vendido = ?,Created = ?,Updated = NOW() WHERE IdVehiculo = ?', [Vehiculo, Marca, Ano, Descripcion, Vendido, Created, IdVehiculo],
        function(err) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            return res.json({
                mensaje: 'Vehiculo actualizado con exito'
            });
        }
    );

}

// ========================
// Elimina un vehiculo dado su id
// ========================
exports.eliminaVehiculo = (req, res) => {

    IdVehiculo = req.params.id;

    respuesta = connection.execute(
        'DELETE FROM vehiculos WHERE IdVehiculo = ?', [IdVehiculo],
        function(err) {
            if (err) {
                return res.json({
                    mensaje: 'ocurrio un error'
                });
            }
            return res.json({
                mensaje: 'Vehiculo eliminado con exito'
            });
        }
    );

}