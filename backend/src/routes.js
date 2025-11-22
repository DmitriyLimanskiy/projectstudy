const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Is working' });
});

module.exports = router;
