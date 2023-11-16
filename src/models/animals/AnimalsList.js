
export class AnimalsList {    
    constructor() {
        this.animals = [];
    }
getAllAnimals() {
        return this.animals;
    }

    getAnimalById(id) {
        return this.animals.find((animal) => animal.id === id);
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    updateAnimal(id, nome, descricao, limiteVagas) {
        const animal = this.getanimalById(id);
        if (!animal) {
            return null;
        }

        animal.nome = nome;
        animal.descricao = descricao;
        animal.limiteVagas = limiteVagas;

        return animal;
    }

    deleteAnimal(id) {
        this.animals = this.animals.filter((animal) => animal.id !== id);
    }
}