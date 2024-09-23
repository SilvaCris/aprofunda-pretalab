import { Pet } from "../../domain";
import { PetRepository } from '../repositories/pet-repository';

export class ListAllPetsUseCase {
  //seu codigo aqui
  constructor(
    private petRepository: PetRepository
  ) {}

  execute(): Array<Pet> {
    const pets = this.petRepository.findAll();
    return pets
  }

}
