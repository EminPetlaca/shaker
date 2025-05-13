const express = require('express');
const router = express.Router();


const shakeRouter = require("../controllers/shakes");

router.get('/', shakeRouter.getAllShakes); 

router.get('/:id', shakeRouter.getShakeById); 

router.post('/', shakeRouter.createShake); 

router.put('/:id', shakeRouter.updateShake); 

router.delete('/:id', shakeRouter.deleteShake); 


router.post('/submit-form', shakeRouter.submitForm);


module.exports = router;
