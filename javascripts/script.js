/* 
    1. Agregue una función IIFE (https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

    (() => {   })();
*/

/* 
    2. Dentro de la función IIFE: 
        2.1. Haga un requerimiento asíncrono según https://codetogo.io/how-to-fetch-json-in-javascript/
        2.2. Utilice el URL: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
*/

/*
    3. En el segundo then de la cadena de promesas, 
       reemplace el contenido del callback console.log(data) por:
       
        3.3. Obtenga una referencia al elemento HTML con el id listofpokemons
        3.2. Obtenga un arreglo a partir del objeto data (en la clave results)
        3.3. Recorra el arreglo de pokemons con un forEach, con dos parámetros pokemon e idx
        
*/

/*
    4. Dentro de la función flecha del forEach
        
        4.1. Asigne la variable name el nombre del pokemon (en la clave name)
        4.2. Renderice el valor de imagen en la URL
        let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png`
        
        4.3. Renderice las variables name e img en la plantilla template
        let template = `
            <div class="col-md-2">
                <div class="card p-2 my-2">
                    <img src="<!-- renderice la variable img -->" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title text-center"> <!-- renderice la variable name --> </h5>
                        </div>
                </div>
            </div>`
        
        4.4. Use la propiedad innerHTML del objeto listofpokemons para 
        concatenar el contenido HTML con la variable template  
*/

(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(response => response.json())
        .then(data => {
            let elemento = document.getElementById('listofpokemons');
            let arreglo = data.results;
            arreglo.forEach((pokemon, idx) => {
                let name = pokemon.name;
                let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png`;
                let template = `
                    <div class="col-md-2">
                        <div class="card p-2 my-2">
                            <img src="${image}" class="card-img-top" alt="${name}">
                                <div class="card-body">
                                <h5 class="card-title text-center">${name}</h5>
                                </div>
                        </div>
                    </div>`
                elemento.innerHTML += template;
            });

        })
        .catch(console.error);
})();

