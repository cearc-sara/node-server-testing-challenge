const express = require("express")

const Wizards = require("../wizards/wizards-model")
const server = express()

server.use(express.json())


server.get("/", (req, res) => {
    res.status(200).json({ api: "running" })
})

server.get("/wizards", (req, res) => {
    Wizards.getAll()
    .then(wizards => {
        res.status(200).json({ wizards: wizards})
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

server.post("/wizards", (req, res) => {
    const wizardData = req.body
    Wizards.insert(wizardData)
    .then(wizard => {
        res.status(201).json({wizards: wizard})
    })
    .catch(err => {
        res.status(500).json({error: "failed to add wizard"})
    })
})
module.exports = server