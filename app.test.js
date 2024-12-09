const request = require("supertest");
const app = require("./app");

describe("Todos API", () => {
    it('GET /todos --> arrray todos', () => {
        return request(app)
            .get("/todos")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    })
                ]))

            })
    })

    it('GET /todos/:id --> get a todo by id', () => { 
        return request(app)
            .get("/todos/1")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    completed: expect.any(Boolean)
                }))
            })
    })
    
    it("GET /todos/id --> 404 if not found", () => {
        return request(app).get("/todos/9999").expect(404);
    })
})
