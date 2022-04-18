const items = require("../fakeDb");
const express = require('express');
const router = express.Router();

router.get('', (req, res, next) => {
  console.log("get route");
    try {
      return res.json({ item:items });
    } catch(err){
      return next(err)
    }
  });

  router.post('', (req, res, next) => {
    try {
      let newItem = {"name": req.body.name, "price": req.body.price}; 
      items.push(newItem); 
      return res.json({item: newItem})
    } catch(err){
      return next(err)
    }
  });

  router.get("/:name", (req, res, next) => {
    console.log("route hit");
    try {
        let foundItem = items.find(element => element.name == req.params.name )
        if(foundItem) {
          return res.json(foundItem)
        }
        throw {message: "Not Found", status: 404}
    } catch(err){
      return next(err)
    }
  });

  module.exports = router;