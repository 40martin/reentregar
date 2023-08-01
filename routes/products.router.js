import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/products", (req, res) => {
    let {limit} = req.query;

    res.send({products:limit ? products.slice(0, limit) : products});
});

productsRouter.get("/products/:pid", (req, res) => {
    let pid = Number(req.params.pid);

    res.send({product:products.find(item => item.id === pid) || "Not found"});
});

export default productsRouter;