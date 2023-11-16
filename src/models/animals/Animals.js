import { v4 as uuidv4 } from 'uuid';

export class Animal {
    constructor(name, age, type, color, statusVaccine, image) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.type = type;
        this.color = color;
        this.statusVaccine = statusVaccine;
        this.image = image;
    }
}
