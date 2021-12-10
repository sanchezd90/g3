const express = require ('express');
const router = express.Router();
const {traerTodos, traerPorId, traerCiudades, traerPorCiudad, crear, editar, eliminar} = require ('../controladores/ubicaciones')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)

router.get('/traer/id/:id',    
    traerPorId
)
router.get('/traer/ciudad/:ciudad',    
    traerPorCiudad
)
router.get('/ciudades',    
    traerCiudades
)

router.post('/editar/',    
    editar
)

router.post('/eliminar/:id',    
    eliminar
)

module.exports = router;