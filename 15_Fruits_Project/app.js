const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
  name: "mango",
  rating: 7,
  review: "pretty solid as a fruit...",
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Jhon",
  age: 37,
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "the best fruit! ",
// });
// const orange = new Fruit({
//   name: "orange",
//   score: 4,
//   review: "too sour for me! ",
// });
// const banana = new Fruit({
//   name: "banana",
//   score: 3,
//   review: "weird texture ",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Created");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.deleteOne({ name: "mango" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }
// });
fruit.save();
