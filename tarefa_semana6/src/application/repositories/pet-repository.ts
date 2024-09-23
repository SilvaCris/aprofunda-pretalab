import { Pet } from "../../domain";

export interface PetRepository {
    save(pet: Pet):void
    findAll(): Pet[];    
    update(id:string, bodyParams: Partial<Pet>): Pet| null
    delete(id: string): Pet[]
}
