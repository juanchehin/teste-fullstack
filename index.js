const express = require('express');
const router = express.Router();

const app = express();
const vehiculoController = require('./controller/vehiculoController');

const port = 3000; // proceess.env.PORT

// Retorna todos los vehiculos
app.get('/vehiculos',
    vehiculoController.dameVehiculos
    // console.log('respuesta vehiculos', respuesta)
)

// Retorna los vehiculos de acuerdo a un parametro de busqueda
app.get('/vehiculos/:q', (req, res) => {
    res.send('Hello World!')
})

// Retorna los detalles de un vehiculo
app.get('/vehiculo/:id', (req, res) => {
    res.send('Hello World!')
})

// Crea un nuevo vehiculo
app.post('/vehiculo', (req, res) => {
    res.send('Hello World!')
})

// Actualiza un  vehiculo
app.put('/vehiculo', (req, res) => {
    res.send('Hello World!')
})

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