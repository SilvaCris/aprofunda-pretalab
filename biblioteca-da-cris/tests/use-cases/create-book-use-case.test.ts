import { CreateBookUseCase } from '../../src/application/use-cases/create-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';
import { Book } from '../../src/domain/book';



describe('CreateBookUseCase', () => {
  let bookRepository: BookRepository;
  let createBookUseCase: CreateBookUseCase;

  beforeEach(() => {
    bookRepository = {
      save: jest.fn(), // mock da função save
    } as unknown as BookRepository;

    createBookUseCase = new CreateBookUseCase(bookRepository);
  });

  it('should create and save a book with the provided parameters', () => {
    const bookParams: Partial<Book> = {
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
    };

    const result = createBookUseCase.execute(bookParams);

    expect(result.title).toBe('Clean Architecture');
    expect(result.author).toBe('Robert C. Martin');
    expect(result.createdAt).toBeDefined();
    expect(bookRepository.save).toHaveBeenCalledWith(result);
  });

  
});
