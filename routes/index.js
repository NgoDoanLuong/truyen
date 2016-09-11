var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var collection = req.db.get('book');
  collection.find({}, {}, function(e, docs) {
    res.render('index', {
        "list_book"  : docs 
    });  
  });
});

/*router.get('/author',function(req,res,next){
    var collection = req.db.get('author');
    collection.find({},{},function(e,docs){
        res.render('',{
            "allauthor" : docs
        });
    });
});*/

router.get('/book/:id', function(req,res, next) {
  var collection = req.db.get('book');
  collection.find({book_id: req.params.id}, {}, function(e, docs) {
    res.render('book', {
      books  : docs
    }); 
       console.log(docs);
  });
});

router.get('/author/:id',function(req,res,next){
    var collection = req.db.get('author')
    collection.find({author_id: req.params.id},{},function(e,docs){
        res.render('author',{
            "authors":docs
        });
        console.log(docs);
    });
});

/*rouer.get('/type',function(req,res,next){
    var collection =req.db.get('book');
    collection.find({},{},function(e,docs){
        res.render('',{
            type : docs
        });
    });
});*/

module.exports = router;
