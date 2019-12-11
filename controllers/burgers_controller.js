const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/burgers", function(req, res) {
     burger.insertOne(
       [ "burger_name"],[req.body.b_name],function() {
        res.redirect("/");
      })
    
    console.log(req);
  });


  router.put("/burgers/:id", function (req, res) {

    burger.updateOne(req.params.id, function(result) {
       
        console.log(result);
       
        res.sendStatus(200);
      });
});



module.exports = router;