import { Router } from "express";
import { getAllAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal, } from "../controllers/animals.controller.js";

const animalsRouter = Router();

animalsRouter.get("/", getAllAnimals );

animalsRouter.get("/:id", getAnimalById );

animalsRouter.post("/", createAnimal );

animalsRouter.put("/:id", updateAnimal );

animalsRouter.delete("/:id", deleteAnimal );



export default animalsRouter