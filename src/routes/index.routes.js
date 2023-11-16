import { Router } from "express";
import animalsRouter from "./animals.routes.js";

const router = Router();

router.use("/animals", animalsRouter);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor Ok!" });
  });

  export default router;