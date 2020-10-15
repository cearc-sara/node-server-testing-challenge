const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("./server")


describe("server.js", () => {
    describe("GET /wizards", () => {
        it("should return 200 OK, and returns 2 wizards", async () => {
            const get = await supertest(server)
            .get("/wizards")
            expect(get.status).toBe(200);
            expect(get.body.wizards.length).toBe(2)
        })
    })
    describe("POST /wizards", () => {
        beforeEach(async () => { //can be used globally for all tests outside the functions
            await db("wizards").truncate()//empties table and resets id back to one
        })
        it("should return the new wizard that was created", async () => {
            const franky = await supertest(server)
            .post("/wizards")
            .send({name: "Franky", house: "Raveclaw", year: "1"});
                // expect(res.status).toBe(201)
            expect(franky.body.wizard.name).toBe("Franky")

            const george = await supertest(server)
            .post("/wizards")
            .send({name: "George", house: "Raveclaw", year: "1"});
                // expect(res.status).toBe(201)
            expect(george.body.wizard.name).toBe("George")
        })
    })
})