const express = require ('express');
const router = express.Router();
const {traerTodos, traerPorId, traerPorUserId, crear, editar, eliminar} = require ('../controladores/usuarios')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)

router.get('/traer/id/:id',    
    traerPorId
)

router.get('/traer/user_id/:user_id',    
    traerPorUserId
)

router.post('/editar/',    
    editar
)

router.post('/eliminar/:id',    
    eliminar
)

module.exports = router;