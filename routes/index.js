/**
 * Created by ibm on 2017/9/27.
 */
var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/trend.html');
});
router.get('/trend.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'trend.html'))
});
router.get('/energy.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'energy.html'))
});
router.get('/report.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'report.html'))
});
router.get('/history.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'history.html'))
});
router.get('/timeState.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'timeState.html'))
});

module.exports = router;
