const { Router } = require('express');


const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

// router.get(
//   '/contacts',
//   (request,response,next) => {
//     request.appID = 'MeuAPPID';
//     next();


//   },

module.exports = router;
