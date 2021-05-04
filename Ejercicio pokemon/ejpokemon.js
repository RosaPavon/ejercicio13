let parrafo ="";

fetch("https://pokeapi.co/api/v2/type/")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<datos.results.length; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})
function poke() {  
  if (poke === "Normal"){
   fetch("https://pokeapi.co/api/v2/type/1")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} 
function poke() {  
  if (poke === "Fighting"){
   fetch("https://pokeapi.co/api/v2/type/2")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Flying"){
   fetch("https://pokeapi.co/api/v2/type/3")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Poison"){
   fetch("https://pokeapi.co/api/v2/type/4")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Ground"){
   fetch("https://pokeapi.co/api/v2/type/5")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Rock"){
   fetch("https://pokeapi.co/api/v2/type/6")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Bug"){
   fetch("https://pokeapi.co/api/v2/type/7")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Ghost"){
   fetch("https://pokeapi.co/api/v2/type/8")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Steel"){
   fetch("https://pokeapi.co/api/v2/type/9")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Fire"){
   fetch("https://pokeapi.co/api/v2/type/10")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Water"){
   fetch("https://pokeapi.co/api/v2/type/11")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Grass"){
   fetch("https://pokeapi.co/api/v2/type/12")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Electric"){
   fetch("https://pokeapi.co/api/v2/type/13")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Psychic"){
   fetch("https://pokeapi.co/api/v2/type/14")
.them(function respuesta(respuesta){
    return respuesta.json()
})
.them(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Ice"){
   fetch("https://pokeapi.co/api/v2/type/15")
.them(function respuesta(respuesta){
    return respuesta.json()
})
.them(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} function poke() {  
  if (poke === "Dragon"){
   fetch("https://pokeapi.co/api/v2/type/16")
.them(function respuesta(respuesta){
    return respuesta.json()
})
.them(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} 
function poke() {  
  if (poke === "Dark"){
   fetch("https://pokeapi.co/api/v2/type/17")
.them(function respuesta(respuesta){
    return respuesta.json()
})
.them(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} 
function poke() {  
  if (poke === "Fairy"){
   fetch("https://pokeapi.co/api/v2/type/18")
.them(function respuesta(respuesta){
    return respuesta.json()
})
.them(function datos(datos){
    for(let i=0; i<4; i++){
        parrafo += `<div class="card" id="personaje${i}">
          <div class="container">
            <h1>${datos.results[i].name}</h1>
            <p>${datos.results[i].url} </p>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = parrafo

})  
  } 
} 

/*
let lista=""
let parrafo=""
fetch("https://pokeapi.co/api/v2/type/")
.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
    for(let i=0; i<datos.results.length; i++){
        
    }
    document.getElementById("catalogo").innerHTML = parrafo
    lista += `<option value="$${datos.results[i].url}">${datos.results[i].name}</option>
  }
  documento.getElementbyid("drop").innerhtml =`
  <select onchange="nombres" id="lista">${Lista}</select>

})
function nombres(){
  fetch(document.getElementById("lista").value
  .then respuesta(respues){
    return respuesta.json()
  }).then(fuction.datos(datos){
    for(let i =0; i<3; i++){
    parrafo +=`
    <p>${datos.pokemon[Math.floor(Math.random() * datos.pokemon.length}+0].pokemon.name</p>
    `
    }
        document.getElementById("catalogo").innerHTML = parrafo

  })

}
cuando el usuario elija un tipo mostras 3 pokemon aleatorios



*/