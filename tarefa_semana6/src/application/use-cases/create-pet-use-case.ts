import { Pet } from "../../domain";
import { PetRepository } from "../repositories/pet-repository";
import { IdGenerator } from '../repositories/id-generator-interface';


export class CreatePetUseCase {
    constructor(private petRepository: PetRepository, private idGenerator: IdGenerator) { }

    private getDate() {
        return new Date().toLocaleDateString('PT-br');
    }

    private getId() {
        return this.idGenerator.generate();
    }

    execute(petParams: Partial<Pet>): Pet {
        const pet = {
            id: this.getId(),
            createdAt: this.getDate(),
            ...petParams
        } as Pet; 

        this.petRepository.save(pet)
        return pet
    }
}













