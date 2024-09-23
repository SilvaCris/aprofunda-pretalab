import { Pet } from "../../domain";
import { PetRepository } from "../repositories/pet-repository";



export class UpdatePetUseCase{
    constructor(private petRepository: PetRepository){}


    execute(id: string, bodyParams: Partial<Pet>) {
        return this.petRepository.update(id, bodyParams)
    }
}