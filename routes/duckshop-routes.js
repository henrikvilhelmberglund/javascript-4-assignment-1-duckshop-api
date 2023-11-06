import express from "express";
import { getProduct, getProducts } from "../controllers/duckshop-controller.js";

export const router = express.Router();

// Routes here
router.route("/products").get(getProducts);
router.route("/product/:id").get(getProduct);
