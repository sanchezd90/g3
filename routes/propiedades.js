const express = require ('express');
const router = express.Router();
const {getAll} = require ('../controladores/propiedades')

router.post('/crear',    
    
)
router.get('/propiedades',    
    getAll
)
router.get('/propiedad/:id',    
    
)
router.post('/editar/:id',    
    
)
router.post('/eliminar/:id',    
    
)

module.exports = router;