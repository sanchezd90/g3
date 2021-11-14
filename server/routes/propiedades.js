const express = require ('express');
const router = express.Router();
const {traerTodos, crear} = require ('../controladores/propiedad')

router.post('/crear',
    crear        
)

router.get('/traer',    
    traerTodos
)
router.get('/traer/:id',    
    
)
router.post('/editar/',    
    
)
router.post('/eliminar/',    
    
)

module.exports = router;