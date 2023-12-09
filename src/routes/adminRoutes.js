import express from "express";
import {
  admin,
  create,
  createpost,
  id,
  idput,
  remove,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/", admin);
router.get("/create", create);
router.post("/create", createpost);
router.get("/edit/:id", id);
router.put("/edit/:id", idput);
router.delete("/delete/:id", remove);

export default router;
