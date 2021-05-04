let parrafo=""
fetch("https://swapi.dev/api/planets/")
.then(function respuesta(respuesta){
    return respuesta.json()

})
.then(function datos(datos){
    for(let i=0; i < datos.results.length; i++){
        parrafo += `// poner que el valor sea el nombre para que no nos podamos equivocar sobre que dar la informacion
        <option value="${datos.results[i].name}">${datos.results[i].name}</option>//las opciones del select cuyo nombre cambiara en relacion al nombre de api
    `
      }
    document.getElementById("planetas").innerHTML= parrafo
    })

function buscar(){
let selección = document.getElementById("planetas").value//recogemos el valor seleccionado por el usuario
let arraypersonajes=[]
imprimir=""
fetch("https://swapi.dev/api/planets/")//tenemos que poner nuevamente un fetch para recopilar la informacion que hay que mostrar
.then(function resp(resp){
    return resp.json()
})
.then(function dat(dat){
  for (let i = 0; i < dat.results.length; i++) {
    if(dat.results[i].name === selección){
      //como el api viene una url y dentro la info tenemos que hacer un fetch por cada personaje
      arraypersonajes= data.results[i].resident//ahora ese es mi array
      }
    
  }
})
.then(function imprimir(imprimir){
  for (let i = 0; i < arraypersonajes.length; i++) {
    fetch(arraypersonajes[i]).then(function resp(resp){
      return resp.json()
    })
    .then(fuction.datitos(datitos){
      imprimir += `
      <p>${datitos.name}</p>
      `  
      document.getElementById("personajes").innerHTML= imprimir  
    });
    
  }
})

        /* `<div class="card" id="planetas${i}">
          <div class="container">
            <h1>${datos.results[i].residents}</h1>
            </div>
      </div>`
    }
    document.getElementById("catalogo").innerHTML = 

})*/



