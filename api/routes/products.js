const express = require("express");
const Product = require("../models/product");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res, next) => {
    Product.find()
        .exec()
        .then((prods) => {
            console.log(prods);
            res.status(200).json(prods);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post("/", (req, res, next) => {
    const body = req.body;

    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: body.name,
        price: body.price
    });

    product
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: "POST /products",
                createdProduct: product
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get con exec->then->catch
router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id)
        .exec()
        .then((prod) => {
            console.log(prod);

            if (prod) {
                res.status(200).json(prod);
            } else {
                res.status(404).json({ message: "product not found" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

//Patch con callback
router.patch("/:productId", (req, res, next) => {
    const id = req.params.productId;

    Product.updateOne({ _id: id }, req.body, (err, resp) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(resp);
        }
    });
});

//Delete con async/await
router.delete("/:productId", async (req, res, next) => {
    const id = req.params.productId;

    try {
        result = await Product.remove({ _id: id }).exec();
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});

module.exports = router;
