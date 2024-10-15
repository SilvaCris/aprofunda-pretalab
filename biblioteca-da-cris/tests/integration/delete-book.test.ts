import mongoose from "mongoose";
import { app } from "../../src/interface";
import supertest from "supertest";

const request = supertest(app);



describe('DeleteBooks', () => {
    it('should delete a book', async () => {
        const newBook = {
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt',
          isbn: '9780135957059',
          pages: 352,
          publisher: 'Addison-Wesley',
          year: 2019,
        };
    
        const createResponse = await request.post('/books').send(newBook);
        const createdBookId = createResponse.body._id;
    
        const deleteResponse = await request.delete(`/book/${createdBookId}`);
    
        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body.message).toBe(
          `Livro com ${createdBookId} deletado com sucesso`
        );
      });
  });