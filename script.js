const character1ID = document.getElementById("select_character_1").value;
const character2ID = document.getElementById("select_character_2").value;
let compareBtn = document.getElementById("compare");

let nameChar1 = document.getElementsByClassName("name-char-1");
let nameChar2 = document.getElementsByClassName("name-char-2");

let genderChar1 = document.getElementsByClassName("gender-char-1");
let genderChar2 = document.getElementsByClassName("gender-char-2");

let heightChar1 = document.getElementsByClassName("height-char-1");
let heightChar2 = document.getElementsByClassName("height-char-2");

let massChar1 = document.getElementsByClassName("mass-char-1");
let massChar2 = document.getElementsByClassName("mass-char-2");

let hairChar1 = document.getElementsByClassName("hair-char-1");
let hairChar2 = document.getElementsByClassName("hair-char-2");

let skinChar1 = document.getElementsByClassName("skin-char-1");
let skinChar2 = document.getElementsByClassName("skin-char-2");

let eyeChar1 = document.getElementsByClassName("eye-char-1");
let eyeChar2 = document.getElementsByClassName("eye-char-2");

let moviesChar1 = document.getElementsByClassName("movies-char-1");
let moviesChar2 = document.getElementsByClassName("movies-char-2");



class Character {
    constructor(name, gender, height, mass, hairColor, skinColor, eyeColor, films) {
      this.name = name;
      this.gender = gender;
      this.height = height;
      this.mass = mass;
      this.hairColor = hairColor;
      this.skinColor = skinColor;
      this.eyeColor = eyeColor;
      this.films = films;
    }
  
    async fetch() {
      const response = await fetch(`https://swapi.dev/api/people/${this.id}/`);
      const data = await response.json();
      this.name = data.name;
      this.gender = data.gender;
      this.height = data.height;
      this.mass = data.mass;
      this.hairColor = data.hair_color;
      this.skinColor = data.skin_color;
      this.eyeColor = data.eye_color;
      this.films = data.films;
    }
}



