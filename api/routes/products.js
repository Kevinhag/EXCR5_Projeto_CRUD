import express from "express";
import {
  getProducts,
  insertProduct,
  deleteProduct,
  updateProduct
} from "../controllers/products.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", insertProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;