var express = require('express');
var router = express.Router();

let products=[
  {
    name:'Iphone 12',
    brand:'Apple',
    price:'50000',
    imageUrl:'https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938680_1.jpg'
},
{
  name:'Oneplus 8',
  brand:'Oneplus',
  price:'30000',
  imageUrl:'https://oasis.opstatics.com/content/dam/oasis/page/billie/N100-Frame.png'
},
{
  name:'Google Pixel 6',
  brand:'Google',
  price:40000,
  imageUrl:'https://m.media-amazon.com/images/I/71QQZr2pNSL._SL1500_.jpg'
},
{
  name:'Samsung note 20',
  brand:'Samsung',
  price:100000,
  imageUrl:'https://media.pakprice.pk/130/rPwCgRBgQeOhPVB20iPhWVJs3Cj6988ymShkcal8.jpeg'
},
{
  name:'Nokia 6.1',
    brand:'Nokia',
    price:20000,
    imageUrl:'https://m.media-amazon.com/images/I/61m2QpD1thL._SX679_.jpg'
}
]

/* GET home page. */
router.get('/cart', function(req, res, next) {
  
  res.render('cart', {products });
});

router.get('/table',(req,res)=>{
  res.render('table',{products})
})
router.get('/list',(req,res)=>{
  res.render('list',{products})
})

module.exports = router;
