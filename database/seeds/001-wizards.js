
exports.seed = function(knex) {
const wizards = [
  {
    name: "Harry",
    house: "Gryffindor",
    year: "5"
  },
  {
    name: "Ron",
    house: "Gryffindor",
    year: "5"
  },
  {
    name: "Hermione",
    house: "Gryffindor",
    year: "5"
  },
  {
    name: "Draco",
    house: "Slytherin",
    year: "5"
  },
  {
    name: "Luna",
    house: "Ravenclaw",
    year: "5"
  },
  {
    name: "Cedric",
    house: "Hufflepuff",
    year: "7"
  }
]
return knex("wizards").insert(wizards)
};
