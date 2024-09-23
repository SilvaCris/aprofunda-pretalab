import { PetRepository } from "../../application/repositories/pet-repository";
import { Pet } from "../../domain";


export class Repository implements PetRepository {

    private pets: Pet[] = []

    save(pet: Pet): void {
        this.pets.push(pet)
    }
    findAll(): Array<Pet> {
        return this.pets;
    }

    update(id: string, bodyParams: Partial<Pet>): Pet | null {

        const petToUpdate = this.pets.find(pet => pet.id === id)


        if (petToUpdate) {
            const updatedPet = {
                ...petToUpdate,
                ...bodyParams
            }

            const index = this.pets.findIndex(pet => pet.id === id);
            this.pets[index] = updatedPet

            return updatedPet
        }

        return null;
    }


    delete(id: string): Array<Pet> {
        const filteredPets = this.pets.filter(pet => pet.id !== id)
        return filteredPets
    }

}