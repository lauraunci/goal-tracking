const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');

/*---------- Public Routes ----------*/
router.get('/', goalsCtrl.index);
router.get('/:id', goalsCtrl.show);
router.post('/', goalsCtrl.create);
router.delete('/:id', goalsCtrl.delete);
router.patch('/:id', goalsCtrl.update);

module.exports = router;