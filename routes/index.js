const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 
 */
router.get('/test', (req, res,next) => {

  console.log("router test called..") // 콘솔에 호출
  res.json("test")  // 요청자에게 응답..
})

module.exports = router;
