const express = require('express');
const router = express.Router();

/* GET Display all products page */
router.get("/list", (req, res, next) => {
    res.render('products/list')
});

/* GET Display single product page */
router.get("/create", (req, res, next) => {
    res.render('products/new')
});

/* POST Display single product page */
router.post("/create", (req, res, next) => {
 
});

/* GET Display single product page */
router.get("/:productId", (req, res, next) => {
    res.render('pages/singleProduct')
});

module.exports = router;