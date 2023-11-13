// Creating an object

let person = {
  name: "John",
  age: 31,
  favColor: "green",
  height: 183,
  languages: ["C++", "Python", "JavaScript"],
  sayLanguagesLearned: function () {
    console.log(`Hello, I am learning: ${this.languages}"!`);
  }
};


console.log(person.sayLanguagesLearned());
