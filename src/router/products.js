import express from "express";
import { getAll } from "../controllers/products.js";



const router = express.Router();

router.get("/product", getAll)

export default router;