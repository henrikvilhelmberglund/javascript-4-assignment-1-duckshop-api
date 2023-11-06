import { myClient } from "../utils/myClient.js";

export async function getProducts(req, res) {
  const response = await myClient("products");
  res.status(response.statusCode).json(response);
}

export async function getProduct(req, res) {
  const id = req.params.id !== undefined ? req.params.id : "error";
  const response = await myClient("product", id);
  res.status(response.statusCode).json(response);
}
