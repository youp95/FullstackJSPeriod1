const fetch = require('node-fetch');



const getThePlanetAskedFor = (id) => {
    let info = {};

   fetch('https://swapi.co/api/people/' + id)
   .then(res => res.json())
   .then(data => {
        info.name = data.name;
        return data.films[0];
})
.then(filmsUrl => fetch(filmsUrl))
.then(res => res.json())
.then(data => {
    info['First film'] = data.title;
    return data.species[0];
})
.then(speciesUrl => fetch(speciesUrl))
.then(res => res.json())
.then(data => {
    info['First species'] = data.name;
    return (
        (Array.isArray(data.homeworld) && data.homeworld[0]) || data.homeworld);

})
.then(homeworldUrl => fetch(homeworldUrl))
.then(res => res.json())
.then(data => {
    info['Homeworld for Species'] = data.name;
})
.catch(err => console.log("Caught error" + err))
.finally(() => 
console.log(JSON.stringify(info, null, '\t'))
);
}



/*
const getThePlanetAskedForAsync = async(id) => {
    let info = {};

    try{
    
    const person = await fetch('https://swapi.co/api/people/' + id).then(res => res.json());
    const firstFilm = await fetch(person.films[0]).then(res => res.json());
    const firstSpecies = await fetch(firstFilm.species[0]).then(res => res.json());
    const homeForSpecies = await fetch(firstSpecies.homeworld).then(res => res.json());

    info.name = role.name;
    info['First film'] = firstFilm.title;
    info['First species'] = firstSpecies.name;
    info['Homeworld for Species'] = homeworld.name;
 } catch(err){
     console.log("Caught error");
} finally {
    console.log(JSON.stringify(info, null, '\t'));
}
}

*/

 getThePlanetAskedFor(1);
//getThePlanetAskedForAsync(1);