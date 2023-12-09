import express from "express";
// import mainControllers from './mainController.js';
import {items} from "../controllers/items.json";

import {
  shop,
  item,
  add,
  cart,
  cartpost,
} from "../controllers/shopController.js";

const router = express.Router();

router.get("/", shop);
router.get("/item/:id", item);
router.post("/item/:id/add", add);
router.get("/cart", cart);
router.post("/cart", cartpost);

// shopRoute.mjs (nótese el cambio de extensión a .mjs)

router.get('/shop', (req, res) => {
  // Pasa los Funkos a la vista
  res.render('shop', items);
});

export default router;


