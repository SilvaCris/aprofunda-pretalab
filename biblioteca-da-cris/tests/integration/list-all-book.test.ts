import mongoose from "mongoose";
import supertest from "supertest";
import { app } from "../../src/interface";
import { Repository } from "../../src/infrastructure/database/mongo-db/repository";


const request = supertest(app);
const bookRepository = new Repository();

describe("ListAllBooks", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
  });

  afterEach(async () => {
  
    await mongoose.connection.close();
  });

  it("should return a empty list", async () => {
    const response = await request.get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([]);
  });

  it("should return a list with all books registered", async () => {
    const mockBooks = [
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "978-0132350884",
        publisher:"Prentice Hall",
        category: "Programming",
        status: "read",
      },
      {
        title: "Code Complete",
        author: "Steve McConnell",
        isbn: "978-0132350884",
        publisher:"Microsoft Press",
        category: "Programming",
        status: "to-read",
      },
    ];
    for (const book of mockBooks) {
      await request.post("/books").send(book);
    }

    const response = await request.get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(mockBooks);
  });
});