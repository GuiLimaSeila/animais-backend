
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

    updateAnimal(id, name, age, type, color, statusVaccine, image) {
        const animal = this.getAnimalById(id);
        if (!animal) {
            return null;
        }

        animal.name = name;
        animal.age = age;
        animal.type = type;
        animal.color = color;
        animal.statusVaccine = statusVaccine;
        animal.image = image;

        return animal;
    }

    deleteAnimal(id) {
        this.animals = this.animals.filter((animal) => animal.id !== id);
    }
}