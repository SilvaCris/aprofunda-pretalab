import mongoose from "mongoose";
import { app } from "../../src/interface";
import supertest from "supertest";

const request = supertest(app);



describe('updateBooks', () => {
    it('should update an existing book', async () => {
        const newBook = {
          title: 'Clean Code',
          author: 'Robert C. Martin',
          isbn: '9780132350884',
          pages: 464,
          publisher: 'Prentice Hall',
          year: 2008,
        };
    
        const createResponse = await request.post('/books').send(newBook);
        const createdBookId = createResponse.body._id;
    
        const updatedBookData = {
          title: 'Clean Code (Updated)',
          year: 2009,
        };
    
        const updateResponse = await request
          .patch(`/book/${createdBookId}`)
          .send(updatedBookData);
    
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.body.bookUpdated).toMatchObject(updatedBookData);
      });
  });