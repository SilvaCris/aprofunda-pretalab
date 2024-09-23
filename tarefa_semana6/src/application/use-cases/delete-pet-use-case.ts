import { Pet } from "../../domain";
import { PetRepository } from "../repositories/pet-repository";


export class DeletePetUseCase {
    constructor (private petRepository: PetRepository) {}


execute(id:string): Array<Pet> {
    return this.petRepository.delete(id)
}
}