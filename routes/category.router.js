const express = require('express');
const router = express.Router();

router.get('/', ( req,res )=> {
  res.json({
    name: 'Categories'
  })
})

router.get('/:categoryId', (req,res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
  })
});

module.exports = router;
