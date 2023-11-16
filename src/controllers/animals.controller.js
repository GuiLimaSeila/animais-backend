import { Animal } from "../models/animals/Animals.js";
import { AnimalsList } from "../models/animals/AnimalsList.js";

const animalsList = new AnimalsList();

let animal = new Animal("Bolinha", 2, "Cachorro", "Marrom", true, "https://s2.glbimg.com/LZUkuMEBy-R0TzMPh2htnLg4qq8=/620x465/s2.glbimg.com/wFqgUL8IGb4N_U2470KOgVaeXms=/620x465/top/s.glbimg.com/jo/g1/f/original/2016/12/16/bolinha_1700_agora.jpg");
animalsList.addAnimal(animal);


export const getAllAnimals = (req, res) => {
    const animal = animalsList.getAllAnimals();

    const { type } = req.query;
    console.log(type);

    const animalByType = animalsList.getAnimalByType(type);
    console.log(animalByType);


    if (!animal) {
        return res.status(404)
            .send({
                message: "Não há nem um animal cadastrados",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller",
                quantity: animalsList.animalsQuantity(),
            });
    }


    animal.forEach((animal) => {
        if (animal.statusVaccine == true) {
            animal.status = "Vacinado";
        } else {
            animal.status = "Não vacinado";
        }
    });

    if (animalByType == "") {
    return res.status(200)
    .send({
        message: "Esses são todos os animais ja cadastrados",
        status: "Dale tudo Ok meu parça",
        origin: "Controller",
        quantity: animalsList.animalsQuantity(),
        data: animal
    });
    }
    return res.status(200)
    .send({  message: "Esses são todos os animais desse tipo",
    status: "Dale tudo Ok meu parça",
    origin: "Controller",
    quantity: animalByType.length,
    data: animalByType
});


}

export const getAnimalById = (req, res) => {

    const { id } = req.params;
    const animalByID = animalsList.getAnimalById(id)

    if (!animalByID) {
        return res.status(404)
            .send({
                message: "Não há um animal com esse id",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    return res.status(200)
        .send({
            message: `animal de ID ${id}`,
            data: animalByID
        }
        );
}

export const createAnimal = (req, res) => {
    const { name, age, type, color, statusVaccine, image } = req.body;

    let error = "Erro: "
    let count =0

    if (!name || !age || !type || !color || !image) {
        error += " Preencha todos os campos."
count ++
    }

    if (name.length < 3 || name.length > 50) {
        error += " Nome inválido."
        count ++
    }
    if (typeof age != 'number' || age == "") {
        if (age < 0 || Number.isInteger(age) == false) {
            error += " Idade inválida."
            error.push("Idade inválida.")
            count ++

        }
    }
    if (type.length > 30 || type == "") {
        error += " Tipo inválido."
        count ++
    }
    if (color.length > 20 || color == "") {
        error += " Cor inválida."
        count ++
    }
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        count ++
    }
    if (typeof statusVaccine != 'boolean') {
        error += " Vacinacao invalida."
        count ++
    }

    if (count == 0) {

        const newAnimal = new Animal(name, age, type, color, statusVaccine, image);

        res.status(200).send({ message: "Animal criado com sucesso", origem: "controllers", data: newAnimal })
    } else {
        res.status(400).send({ message: error, status: "Not Found" })
    }



}

export const updateAnimal = (req, res) => {
    const { id } = req.params;
    const { name, age, type, color, statusVaccine, image } = req.body;

    const animalByID = animalsList.getAnimalById(id);

    let error = "Erro: "
    let count =0

    if (!animalByID) {
        return res.status(404)
            .send({
                message: "Não há um animal com esse id",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    if (!name || !age || !type || !color || !image) {
        error += " Preencha todos os campos."
count ++
    }

    if (name.length < 3 || name.length > 50) {
        error += " Nome inválido."
        count ++
    }
    if (typeof age != 'number' || age == "") {
        if (age < 0 || Number.isInteger(age) == false) {
            error += " Idade inválida."
            error.push("Idade inválida.")
            count ++

        }
    }
    if (type.length > 30 || type == "") {
        error += " Tipo inválido."
        count ++
    }
    if (color.length > 20 || color == "") {
        error += " Cor inválida."
        count ++
    }
    if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
        error += " Imagem inválida."
        count ++
    }
    if (typeof statusVaccine != 'boolean') {
        error += " Vacinacao invalida."
        count ++
    }

    if (count == 0) {
        const animalEdited = animalsList.updateAnimal(id, name, age, type, color, statusVaccine, image);

        res.status(200).send({ message: "Animal atualizado com sucesso", origem: "controllers", data: animalEdited })
    } else {
        res.status(400).send({ message: error, status: "Not Found" })
    }

}

export const deleteAnimal = (req, res) => {
    const { id } = req.params;

    const animalByID = animalsList.getAnimalById(id);

    if (!animalByID) {
        return res.status(404)
            .send({
                message: "Não há um animal com esse id",
                status: "Dale tudo RUIM meu parça",
                origin: "Controller"
            });
    }

    animalsList.deleteAnimal(id);

    return res.status(200)
        .send({
            message: "Animal deletado com sucesso",
            status: "Dale tudo Ok meu parça",
            quantity: animalsList.animalsQuantity(),
            origin: "Controller",
        });
}