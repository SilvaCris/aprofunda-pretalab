import { Repository } from "../database/repository";
import { IdentifierGenerator } from "./id-generator";
import { CreatePetUseCase } from "../../application/use-cases/create-pet-use-case";
import { ListAllPetsUseCase } from '../../application/use-cases/list-all-pets-use-case';
import { UpdatePetUseCase } from "../../application/use-cases/update-pet-use-case";
import { DeletePetUseCase } from "../../application/use-cases/delete-pet-use-case";
import { PetController } from "../../interface/pet-controller";


export function configureDependencies() {
 const petRepository = new Repository()
 const idGenerator = new IdentifierGenerator()

const createPetUseCase = new CreatePetUseCase(petRepository, idGenerator)
const listAllPetsUseCase = new ListAllPetsUseCase(petRepository);
const updatePetUseCase = new UpdatePetUseCase(petRepository)
const deletePetUseCase = new DeletePetUseCase(petRepository)

const petController = new PetController (createPetUseCase, listAllPetsUseCase, updatePetUseCase, deletePetUseCase)

return {
    petController
}

}