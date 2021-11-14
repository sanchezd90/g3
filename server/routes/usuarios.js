const express = require ('express');
const router = express.Router();
const {traerTodos, traerPorId, crear, editar} = require ('../controladores/usuarios')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)

router.get('/traer/:id',    
    traerPorId
)

router.post('/editar/',    
    editar
)

router.post('/eliminar/',    
    
)

module.exports = router;