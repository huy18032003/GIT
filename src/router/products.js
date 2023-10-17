import express from "express";
import { getAll, getOneProduct } from "../controllers/products.js";



const router = express.Router();

router.get("/product", getAll)
router.get("/product/:id", getOneProduct)

export default router;