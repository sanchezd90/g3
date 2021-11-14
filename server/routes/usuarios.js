const express = require ('express');
const router = express.Router();
const {traerTodos, crear} = require ('../controladores/usuarios')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)
router.get('/traer/:id',    
    
)
router.post('/editar/:id',    
    
)
router.post('/eliminar/:id',    
    
)

module.exports = router;