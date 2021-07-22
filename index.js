const express = require('express');
const router = express.Router();

const app = express();
const vehiculoController = require('./controller/vehiculoController');

// Para usar el cuerpo de la peticion (body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000; // proceess.env.PORT

// Retorna todos los vehiculos
app.get('/vehiculos',
    vehiculoController.dameVehiculos
)

// Retorna los vehiculos de acuerdo a un parametro de busqueda
app.get('/vehiculo/:q',
    vehiculoController.dameVehiculo
)

// Retorna los vehiculos de acuerdo a un ID
app.get('/vehiculo/id/:id',
    vehiculoController.dameVehiculoID
)

// Crea un nuevo vehiculo
app.post('/vehiculo',
    vehiculoController.altaVehiculo
)

// Actualiza el vehiculo con el id
app.put('/vehiculo/:id',
    vehiculoController.actualizaVehiculo
)

// Actualiza solo algunos datos del vehículo
app.path('/vehiculo/:id', (req, res) => {
    res.send('Hello World!')
})

// Elimina un vehiculo dado su id
app.delete('/vehiculo/:id', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})