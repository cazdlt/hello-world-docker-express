const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "GET /orders"
    });
});

router.post("/", (req, res, next) => {
    const body = req.body;
    const order = {
        productId: body.productId,
        quantity: body.quantity
    };
    res.status(201).json({
        message: "POST /orders",
        createdOrder: order
    });
});

router.get("/:orderId", (req, res, next) => {
    const id = req.params.orderId;

    res.status(200).json({
        message: "order detauls",
        id: id
    });
});

router.delete("/:orderId", (req, res, next) => {
    res.status(200).json({
        message: "order delete"
    });
});

module.exports = router;
