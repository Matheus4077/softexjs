const express = require('express');
const router = express.Router();
const controllers = require('../controllers/clientControllers');

router.get('/', controllers.hellowolrd);
router.get('/clients', controllers.showClients);
router.get('/clients/:id', controllers.showClientById);
router.post('/postclients', controllers.post);
router.put('/upedate/:id', controllers.update);
router.delete('/delete/:id', controllers.deletar);

module.experts ={
    router
}