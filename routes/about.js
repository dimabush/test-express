var express = require('express');
var router = express.Router();
var Lipsum = require('node-lipsum'),
    lipsum = new Lipsum();

lipsumOpts = {
    start: 'no',
    what: 'paras',
    amount: 20
};

lipsum.getText(function (text) {
    router.get('/', function (req, res, next) {
        res.render('about', {
            title: 'About',
            textLipsum: text
        });
    });
}, lipsumOpts);
module.exports = router;
