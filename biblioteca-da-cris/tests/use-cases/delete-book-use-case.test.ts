import { BookRepository } from "../../src/application/repositories/book-repository";
import { DeleteBookUseCase } from "../../src/application/use-cases/delete-book-use-case";


describe('DeleteBookUseCase', () => {
  let bookRepository: BookRepository; 
  let deleteBookUseCase: DeleteBookUseCase;

  beforeEach(() => {
    
    bookRepository = {
      delete: jest.fn(),
    } as unknown as BookRepository; 

    deleteBookUseCase = new DeleteBookUseCase(bookRepository);
  });

  it('Should call delete method by ID', async () => {
    const bookId = '1';

    await deleteBookUseCase.execute(bookId);

    expect(bookRepository.delete).toHaveBeenCalledWith(bookId);
  });
});
