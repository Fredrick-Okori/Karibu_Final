const express = require('express');
const router = express.Router();
//require Mananger database to save new user 

router.get('/', (req, res) => {
    
        res.render('creditagent')
  
});

module.exports = router;