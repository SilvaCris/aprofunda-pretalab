import mongoose from "mongoose";
import { app } from "../../src/interface";
import supertest from "supertest";

const request = supertest(app);
 
 
 describe ('CreateBook', ()=> {

    beforeEach(async () => {
        await mongoose.connect(process.env.MONGODB_URI as string);
      });

      afterEach(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
      });

it('should create a book', async ()=> {

const response = await request.post("/books").send({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    publisher:"Prentice Hall",
    category: "Programming",
    status: "read"  
})

expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "978-0132350884",
      publisher:"Prentice Hall",
      category: "Programming",
      status: "read"

})

})



 })