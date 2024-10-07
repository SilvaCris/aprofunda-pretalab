import { BookRepository } from "../../src/application/repositories/book-repository";
import { UpdateBookUseCase } from "../../src/application/use-cases/update-book-use-case";
import { Book } from "../../src/domain/book";


describe('UpdateBookUseCase', () => {
  let bookRepository: BookRepository;
  let updateBookUseCase: UpdateBookUseCase;

  beforeEach(() => {
   
    bookRepository = {
        update: jest.fn(),
    } as unknown as BookRepository;

    updateBookUseCase = new UpdateBookUseCase(bookRepository);
  });

  it('should update the book that corresponds to the id', async () => {
    const bookId = '1';
    const updateParams: Partial<Book> = { title: 'New Title', author: 'New Author' };

    await updateBookUseCase.execute(bookId, updateParams);

    expect(bookRepository.update).toHaveBeenCalledWith(bookId, updateParams);
  });
});
