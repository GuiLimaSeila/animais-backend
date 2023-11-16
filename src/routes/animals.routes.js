import { Router } from "express";
import { getAllAnimals, getAnimalById, createAnimal, updateAnimal, } from "../controllers/animals.controller.js";

const animalsRouter = Router();

animalsRouter.get("/", getAllAnimals );

animalsRouter.get("/:id", getAnimalById );

animalsRouter.post("/", createAnimal );

animalsRouter.put("/:id", updateAnimal );



export default animalsRouter