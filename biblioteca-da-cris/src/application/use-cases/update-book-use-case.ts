import { Book } from "../../domain/book";
import { BookRepository } from "../repositories/book-repository";



export class UpdateBookUseCase {
    constructor (
      private bookRepository: BookRepository){}
  
    async execute(id: string, params: Partial<Book>): Promise<Book | null> {
     
      return await this.bookRepository.update(id, params);
    }
  }