var express = require('express');
var router = express.Router();

var Lipsum = require('node-lipsum');
var lipsum = new Lipsum();
lipsumOpts = {
    start: 'yes',
    what: 'bytes',
    amount: 1800
};
lipsum.getText(function (text) {
    router.get('/', function (req, res, next) {
        res.render('products', {
            title: 'Products',
            textLipsum: text
        });
    });
}, lipsumOpts);


module.exports = router;
