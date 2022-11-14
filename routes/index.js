var express = require('express');
var router = express.Router();
const Username='sha';
const password =123;

function validateUser(req,res,next){

  if(password==req.body.password && Username==req.body.username){
    next()
  }
  else{
    res.render('index',{error: "Ivalid Username or Password"})
  }
}
function validateSession(req,res,next){
  if(req.session.user){
    // console.log("user exist");
    next();
  }
  else{
    res.redirect('/')
  }

}
function ValidateLog(req,res,next){
  if(!req.session.user){
    req.session.loggedIn=false;

  }
  if(req.session.user){
    res.redirect('/home')
  }else{
    next()
  }
}

router.get('/',ValidateLog,(req,res)=>{

  res.render('index')
})

router.get('/home',validateSession,(req,res)=>{
  res.render('home',{Username})
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout',(req,res)=>{
  req.session.user=null
  req.session.loggedIn=false
  res.render('index')
})

router.post('/login',ValidateLog,validateUser,(req,res)=>{
  req.session.loggedIn=true;
  req.session.user=Username
res.redirect('/home')
})

module.exports = router;
