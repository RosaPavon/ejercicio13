

fetch("https://randomuser.me/api/").them(function respuesta(respuesta){
    return respuesta.json()
})
.then(function datos(datos){
     document.getElementById("catalogo").innerHTML = `
     <img src="${datos.results.picture.thumbnail}"/>
     <p>${datos.results[0].name.first}</p>
     <p>${datos.results[0].number}</p>
     <p>${datos.results[0].email}</p>
     <p>${datos.results[0].location.street.name}</p>
     <p>${datos.results[0].location.state}</p>
     <p>${datos.results[0].location.city}</p>
     <p>${datos.results[0].location.street.postcode}</p>
`
})
