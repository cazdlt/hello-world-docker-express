const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "GET /products"
    });
});

router.post("/", (req, res, next) => {
    const body = req.body;
    const product = {
        name: body.name,
        price: body.price
    };
    res.status(201).json({
        message: "POST /products",
        createdProduct: product
    });
});

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    if (id == "special") {
        res.status(200).json({
            message: "special ID",
            id: id
        });
    } else {
        res.status(200).json({
            message: "normal Id",
            id: id
        });
    }
});

router.patch("/:productId", (req, res, next) => {
    res.status(200).json({
        message: "product patch"
    });
});

router.delete("/:productId", (req, res, next) => {
    res.status(200).json({
        message: "product delete"
    });
});

module.exports = router;
