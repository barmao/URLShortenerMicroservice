const express = require('express');
const router = express.Router();
const UrlModel = require('../models/urls');

router.get('/index', function (req, res) {
    res.render("index")
});


router.post('/shorturl', (req, res)=>{

    var urlData = new UrlModel({ url: 'www.google.com',shortUrl: '12345' });

    console.log(urlData);

    urlData.save(function (err) {
        if (err) return handleError(err);
        console.log('saved')
      });

    res.json(urlData)
})

module.exports = router;