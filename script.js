

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
   
}

const selectedCharacter = new Character();
const selectedCharacter2 = new Character();

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
        console.log(data);

        let filmRequests = data.films.map(filmUrl => fetch(filmUrl).then(res => res.json()));
        Promise.all(filmRequests).then(filmData => {
        let filmTitles = filmData.map(film => film.title);
        selectedCharacter.filmTitles = filmTitles; 
        console.log(filmTitles);



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

      });
      })
    }
  });
});

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
        console.log(data);

        let filmRequests = data.films.map(filmUrl => fetch(filmUrl).then(res => res.json()));
        Promise.all(filmRequests).then(filmData => {
        let filmTitles2 = filmData.map(film => film.title);
        selectedCharacter2.filmTitles2 = filmTitles2; 
        console.log(filmTitles2);


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
        

      });
      })
      
    }

    function compareCharacters() {

      let table = document.querySelector("table");

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
        <td class="movies-char-1">${selectedCharacter.filmTitles.join(', ')}</td>
        <td class="middle">Movies</td>
        <td class="movies-char-2">${selectedCharacter2.filmTitles2.join(', ')}</td>
      </tr>

    </tbody>`
      
    }
    let compareBtn = document.getElementById('compare');
    compareBtn.addEventListener('click', event => {
      
        compareCharacters();

    });
  });
});


