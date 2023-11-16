import { Animal } from "../models/animals/Animals.js";
import { AnimalsList } from "../models/animals/AnimalsList.js";

const animalsList = new AnimalsList();

export const getAllAnimals = (req, res) => {
    const animal= animalsList.getAllAnimals();
    if (!animal.length) {
        return res.status(404)
            .send({
                message: "Não há nem um animal cadastrados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message: "Esses são todos os animais ja cadastrados",
            status: "Dale tudo Ok meu parça",
            origin: "Controller",
            data: animal
        });
}

export const getAnimalById = (req, res) => {

    const { id } = req.params;
    const animalByID = animalsList.getAnimalById(id)

    if (!animalByID.length) {
        return res.status(404)
            .send({
                message: "Não há um animal com esse id",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message:  `animal de ID ${id}`,
            status: "Dale tudo Ok meu parça",
            origin: "Controller",
            data: animalByID
        }
        );
}

export const createAnimal = (req, res) => {
    const { name, age, type, color, statusVaccine, image } = req.body;

    if (!name || !age || !type || !color || !statusVaccine || !image) {
        return res.status(400)
            .send({
                message: "Precisa preencher todos os campos",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if (name.length < 3 || name.length > 50) {
        return res.status(400)
            .send({
                message: "O nome precisa ter entre 3 e 50 caracteres",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if (age < 0) { 
        return res.status(400)
            .send({
                message: "A idade precisa ser maior que 0",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if(age >0){
        return Math.floor(age)
    }

    if (type.length < 3 || type.length > 30) {
        return res.status(400)
            .send({
                message: "O tipo precisa ter menos que 30 caracteres",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if (color.length < 3 || color.length > 20) {
        return res.status(400)
            .send({
                message: "A cor precisa ter menos que 30 caracteres",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if (statusVaccine == true) {
        return statusVaccine = "Vacinado"
    }

    if (statusVaccine == false) {
        return statusVaccine = "Não vacinado"
    }

    if (image.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return res.status(400)
            .send({
                message: "Precissa ser um link valido",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    const newAnimal = new Animal(name, age, type, color, statusVaccine, image);

    return res.status(201)
        .send({
            message: "Animal cadastrado com sucesso",
            status: "Dale tudo Ok meu parça",
            origin: "Controller",
            data: newAnimal
        });
}