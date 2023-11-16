import { Router } from "express";
import { getAllAnimals, getAnimalById, createAnimal} from "../controllers/animals.controller.js";

const animalsRouter = Router();

animalsRouter.get("/", getAllAnimals );

animalsRouter.get("/:id", getAnimalById );

animalsRouter.post("/", createAnimal );



export default animalsRouter