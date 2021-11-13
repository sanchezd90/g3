const express = require ('express');
const router = express.Router();
const {traerTodos, crear} = require ('../controladores/propiedades')

router.post('/crear',
    crear        
)

router.get('/propiedades',    
    traerTodos
)
router.get('/propiedad/:id',    
    
)
router.post('/editar/:id',    
    
)
router.post('/eliminar/:id',    
    
)

module.exports = router;