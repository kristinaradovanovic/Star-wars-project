

//skapa karaktärsklass och metoder
class Characters {
  constructor(
      name,
      gender,
      height,
      mass,
      hairColor,
      skinColor,
      eyeColor,
      films,
      homeworld,
      starships = [],
      vehicles = []
    ) {
      this.name = name;
      this.gender = gender;
      this.height = height;
      this.mass = mass;
      this.hairColor = hairColor;
      this.skinColor = skinColor;
      this.eyeColor = eyeColor;
      this.films = films;
      this.homeworld = homeworld;
      this.starships = starships;
      this.vehicles = vehicles;

  }

  async getFirstAppearance() {
      const response = await fetch(this.films[0]);
      const movie = await response.json();
      return movie.title;
    }

  async getFirstAppearanceDate() {
    const response = await fetch(this.films[0]);
    const movie = await response.json();
    return movie.release_date;
}

  async printMovies() {
      const movieTitles = [];
      for (const film of this.films) {
        const response = await fetch(film);
        const movie = await response.json();
        movieTitles.push(movie.title);
      }
      return movieTitles;
    }

    async getHomePlanet() {
      const response = await fetch(this.homeworld);
      const planet = await response.json();
      return planet.name;
    }

    
    async getMostExpensiveVehicle() {
      let mostExpensiveVehicle = {
          name: "",
          price: 0
      };
      let hasVehicle = false;
      let hasStarship = false;
      
      for (const vehicle of this.vehicles){
          const response = await fetch(vehicle);
          const charVehicle = await response.json();
          if (charVehicle.cost_in_credits && parseInt(charVehicle.cost_in_credits) > mostExpensiveVehicle.price) {
              mostExpensiveVehicle.name = charVehicle.name;
              mostExpensiveVehicle.price = parseInt(charVehicle.cost_in_credits);
          }
          hasVehicle = true;
      }
  
      for (const starship of this.starships){
          const response = await fetch(starship);
          const charStarship = await response.json();
          if (charStarship.cost_in_credits && parseInt(charStarship.cost_in_credits) > mostExpensiveVehicle.price) {
              mostExpensiveVehicle.name = charStarship.name;
              mostExpensiveVehicle.price = parseInt(charStarship.cost_in_credits);
          }
          hasStarship = true;
      }
  
      if (!hasVehicle && !hasStarship) {
          return "This character doesn't have any vehicles or starships.";
      } else if (mostExpensiveVehicle.price === 0) {
          return "The price of the most expensive vehicle or starship is unknown.";
      } else {
          return `${mostExpensiveVehicle.name} (${mostExpensiveVehicle.price} credits)`;
      }
  }

  compare(other) {
      let comparisons = [];
    
      // Compare height
      if (this.height > other.height) {
        comparisons.push(`${this.name} is taller than ${other.name}<br>`);
      } else if (this.height < other.height) {
        comparisons.push(`${this.name} is shorter than ${other.name}<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} are the same height<br>`);
      }
    
      // Compare mass
      if (this.mass > other.mass) {
        comparisons.push(`${this.name} is heavier than ${other.name}<br>`);
      } else if (other.mass > this.mass) {
        comparisons.push(`${this.name} is lighter than ${other.name}<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} have the same mass<br>`);
      }
    
      // Compare number of movies
      if (this.films.length > other.films.length) {
        comparisons.push(`${this.name} has appeared in more movies than ${other.name}<br>`);
      } else if (this.films.length < other.films.length) {
        comparisons.push(`${this.name} has appeared in fewer movies than ${other.name}<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} have appeared in the same number of movies<br>`);
      }
    
      // Compare gender
      if (this.gender === other.gender) {
        comparisons.push(`${this.name} and ${other.name} are the same gender<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} are different genders<br>`);
      }
    
      // Compare hair color
      if (this.hairColor === other.hairColor) {
        comparisons.push(`${this.name} and ${other.name} have the same hair color<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} have different hair colors<br>`);
      }
    
      // Compare skin color
      if (this.skinColor === other.skinColor) {
        comparisons.push(`${this.name} and ${other.name} have the same skin color<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} have different skin colors<br>`);
      }
    
      // Compare home planet
      if (this.homeworld === other.homeworld) {
        comparisons.push(`${this.name} and ${other.name} are from the same planet<br>`);
      } else {
        comparisons.push(`${this.name} and ${other.name} are from different planets<br>`);
      }
    
      return comparisons.join("");
    }
    
}
//anropa karaktärsklass och skapa två karaktärer att jämföra
const selectedCharacter = new Characters();
const selectedCharacter2 = new Characters();


//Event listener för dropdown list för att få värdet på valt karaktär och skriva ut deras information + skriva ut rätt bild
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('select_character_1');

  select.addEventListener('change', event => {
    const selectedValue = event.target.value;
    
    if(selectedValue==='0'){
      Object.keys(selectedCharacter).forEach(key => {
        selectedCharacter[key] = undefined;
      });
      return;
    }
    else {
      let charApi = `https://swapi.dev/api/people/${selectedValue}/`;
      fetch(charApi)
      .then(res=>res.json())
      .then(data =>{
        selectedCharacter.name = data.name;
        selectedCharacter.gender = data.gender;
        selectedCharacter.height = data.height;
        selectedCharacter.mass = data.mass;
        selectedCharacter.hairColor = data.hair_color;
        selectedCharacter.skinColor = data.skin_color;
        selectedCharacter.eyeColor = data.eye_color;
        selectedCharacter.films = data.films;
        selectedCharacter.homeworld = data.homeworld;
        selectedCharacter.vehicles = data.vehicles;
        selectedCharacter.starships = data.starships;
        console.log(data);

        const characterImages = {
          0: "",
          1: "pictures/Pictures/luke_skywalker_png-removebg-preview.png",
          2: "pictures/Pictures/c-3po-removebg-preview.png",
          3: "pictures/Pictures/r2-d2-removebg-preview.png",
          4: "pictures/Pictures/darth_vader_png-removebg-preview.png",
          5: "pictures/Pictures/leia-organa-removebg-preview.png",
          6: "pictures/Pictures/owen-lars-removebg-preview.png",
          7: "pictures/Pictures/beru-lars-removebg-preview.png",
          8: "pictures/Pictures/r5-d4-removebg-preview.png",
          9: "pictures/Pictures/biggs-darklighter-removebg-preview.png",
          10: "pictures/Pictures/obi-wan-kenobi-removebg-preview.png",
          11: "pictures/Pictures/anakin-skaywalker-removebg-preview.png",
          12: "pictures/Pictures/tarkin-removebg-preview.png"
        };
      
        const imgElement = document.querySelector(".char1-img");
        imgElement.src = characterImages[selectedValue];
      })
    }
  });
});


//Samma event listener men för character 2
document.addEventListener('DOMContentLoaded', () => {
  const select2 = document.getElementById('select_character_2');

  select2.addEventListener('change', event => {
    const selectedValue2 = event.target.value;
    
    if(selectedValue2==='0'){
      Object.keys(selectedCharacter2).forEach(key => {
        selectedCharacter2[key] = undefined;
      });
      return;
    }
    else {
      let charApi = `https://swapi.dev/api/people/${selectedValue2}/`;
      fetch(charApi)
      .then(res=>res.json())
      .then(data =>{
        selectedCharacter2.name = data.name;
        selectedCharacter2.gender = data.gender;
        selectedCharacter2.height = data.height;
        selectedCharacter2.mass = data.mass;
        selectedCharacter2.hairColor = data.hair_color;
        selectedCharacter2.skinColor = data.skin_color;
        selectedCharacter2.eyeColor = data.eye_color;
        selectedCharacter2.films = data.films;
        selectedCharacter2.homeworld = data.homeworld;
        selectedCharacter2.vehicles = data.vehicles;
        selectedCharacter2.starships = data.starships;
        console.log(data);

        const characterImages2 = {
          0: "",
          1: "pictures/Pictures/luke_skywalker_png-removebg-preview.png",
          2: "pictures/Pictures/c-3po-removebg-preview.png",
          3: "pictures/Pictures/r2-d2-removebg-preview.png",
          4: "pictures/Pictures/darth_vader_png-removebg-preview.png",
          5: "pictures/Pictures/leia-organa-removebg-preview.png",
          6: "pictures/Pictures/owen-lars-removebg-preview.png",
          7: "pictures/Pictures/beru-lars-removebg-preview.png",
          8: "pictures/Pictures/r5-d4-removebg-preview.png",
          9: "pictures/Pictures/biggs-darklighter-removebg-preview.png",
          10: "pictures/Pictures/obi-wan-kenobi-removebg-preview.png",
          11: "pictures/Pictures/anakin-skaywalker-removebg-preview.png",
          12: "pictures/Pictures/tarkin-removebg-preview.png"
        };
      
        const imgElement2 = document.querySelector(".character_2_img");
        imgElement2.src = characterImages2[selectedValue2];
  })
}

//Funktion som skriver ut alla info om karaktär
async function printCharacterInfo() {
  
    let table = document.querySelector("table");
    let char1Info = document.querySelector("#char1-info");
    let char2Info = document.querySelector("#char2-info");
    let compareChars = document.querySelector("#compare_both_char");

    table.innerHTML = `<thead>
        <tr>
          <th id="col-text" colspan="3">Compare SW Characters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="name-char-1">${selectedCharacter.name}</td>
          <td class="middle">Name</td>
          <td class="name-char-2">${selectedCharacter2.name}</td>
        </tr>
        <tr>
          <td class="gender-char-1">${selectedCharacter.gender}</td>
          <td class="middle">Gender</td>
          <td class="gender-char-2">${selectedCharacter2.gender}</td>
        </tr>
        <tr>
          <td class="height-char-1">${selectedCharacter.height}</td>
          <td class="middle">Height</td>
          <td class="height-char-2">${selectedCharacter2.height}</td>
        </tr>
        <tr>
          <td class="mass-char-1">${selectedCharacter.mass}</td>
          <td class="middle">Mass</td>
          <td class="mass-char-2">${selectedCharacter2.mass}</td>
        </tr>
        <tr>
          <td class="hair-char-1">${selectedCharacter.hairColor}</td>
          <td class="middle">Hair Color</td>
          <td class="hair-char-2">${selectedCharacter2.hairColor}</td>
        </tr>
        <tr>
          <td class="skin-char-1">${selectedCharacter.skinColor}</td>
          <td class="middle">Skin Color</td>
          <td class="skin-char-2">${selectedCharacter2.skinColor}</td>
        </tr>
        <tr>
          <td class="eye-char-1">${selectedCharacter.eyeColor}</td>
          <td class="middle">Eye Color</td>
          <td class="eye-char-2">${selectedCharacter2.eyeColor}</td>
        </tr>
        <tr>
          <td class="movies-char-1">${selectedCharacter.films.length}</td>
          <td class="middle">Number of Movies</td>
          <td class="movies-char-2">${selectedCharacter2.films.length}</td>
        </tr>
      </tbody>`


//Skriva ut extra info om karaktär 1 och 2 som Li under character bild 
const firstMovie = await selectedCharacter.getFirstAppearance();
const firstMovieDate = await selectedCharacter.getFirstAppearanceDate();
const movieTitles = await selectedCharacter.printMovies();
const homePlanet = await selectedCharacter.getHomePlanet();
const mostExpensiveVehicle = await selectedCharacter.getMostExpensiveVehicle();


const firstMovie2 = await selectedCharacter2.getFirstAppearance();
const firstMovieDate2 = await selectedCharacter2.getFirstAppearanceDate();
const movieTitles2 = await selectedCharacter2.printMovies();
const homePlanet2 = await selectedCharacter2.getHomePlanet();
const mostExpensiveVehicle2 = await selectedCharacter2.getMostExpensiveVehicle();


const comparisons = selectedCharacter.compare(selectedCharacter2);
compareChars.innerHTML = comparisons;


char1Info.innerHTML = `
  <li>First appearance: ${firstMovie}</li>
  <li>First appeared in a movie in: ${firstMovieDate}</li>
  <li>Movies: ${movieTitles.join(", ")}</li>
  <li>Home planet: ${homePlanet}</li>
  <li>Most Expensive vehicle: ${mostExpensiveVehicle}</li>
`;

char2Info.innerHTML = `
<li>First appearance: ${firstMovie2}</li>
<li>First appeared in a movie in: ${firstMovieDate2}</li>
<li>Movies: ${movieTitles2.join(", ")}</li>
<li>Home planet: ${homePlanet2}</li>
<li>Most Expensive vehicle: ${mostExpensiveVehicle2}</li>
`;

char1Info.style.display='block';
char2Info.style.display='block';
compareChars.style.display='block';

}

//Compare button event listener som kör printCharacterInfo funktion och skriver ut alla data 
let compareBtn = document.getElementById('compare');
compareBtn.addEventListener('click', event => {
  
  printCharacterInfo();

});
});
});
