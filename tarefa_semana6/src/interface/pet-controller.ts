import { Request, Response } from 'express';
import { CreatePetUseCase } from "../application/use-cases/create-pet-use-case";
import { ListAllPetsUseCase } from '../application/use-cases/list-all-pets-use-case';
import { DeletePetUseCase } from '../application/use-cases/delete-pet-use-case';
import { Pet } from "../domain";
import { UpdatePetUseCase } from '../application/use-cases/update-pet-use-case';


export class PetController {
    constructor(
        private createPetUseCase: CreatePetUseCase,
        private listAllPetsUseCase: ListAllPetsUseCase, 
        private updatePetUseCase: UpdatePetUseCase,
        private deletePetUseCase: DeletePetUseCase
    ) { }

    create(req: Request, res: Response) {
        const params: Pet = req.body
        const pet = this.createPetUseCase.execute(params)
        res.status(201).json({ message: `Pet ${pet.name} criado com sucesso`, pet})
       
    }

    listAll(req: Request, res: Response) {
        const pets = this.listAllPetsUseCase.execute();
        res.json(pets);
    }


    update(req: Request, res: Response){

    const params = req.body
    const { id } = req.params;

    const petUpdated = this.updatePetUseCase.execute(id, params);
    
    res.json({ message: `Pet com ${id} alterado com sucesso`,petUpdated })


    }

    delete(req: Request, res: Response) {
        const {id} = req.params
        const petsFiltered = this.deletePetUseCase.execute(id)
    
        res.json({ message: `Pet com ${id} deletado com sucesso`, petsFiltered });
    }

}

