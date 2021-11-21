const express = require ('express');
const router = express.Router();
const {traerTodos, traerPorId, traerPorTipo, traerPorHabitaciones, traerPorPrecio, traerPorEstacionamiento, filtrar, crear, editar, eliminar} = require ('../controladores/propiedades')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)

router.get('/traer/id/:id',    
    traerPorId
)

router.get('/traer/tipo/:tipo',    
    traerPorTipo
)

router.get('/traer/habitaciones/:min/:max',    
    traerPorHabitaciones
)
router.get('/traer/precio/:min/:max',    
    traerPorPrecio
)

router.get('/traer/estacionamiento/:estacionamiento',    
    traerPorEstacionamiento
)

router.get('/filtrar/:tipo/:precioMin/:precioMax/:habitacionesMin/:habitacionesMax/:estacionamiento',    
    filtrar
)

router.post('/editar/',    
    editar
)

router.post('/eliminar/:id',    
    eliminar
)


module.exports = router;