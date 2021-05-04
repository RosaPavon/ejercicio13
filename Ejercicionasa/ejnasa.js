
let anno= parseInt(window.prompt("Escribe un año"))
let mes= parseInt(window.prompt("Escribe un mes"))
let día= parseInt(window.prompt("Escribe un día"))


fetch("https://api.nasa.gov/planetary/apod?api_key=7qUqE3KhUeX0pRwg6nbkU7FgxgzqKWHpw9cbXkVP")//fetch("https://api.nasa.gov/planetary/apod?api_key=7qUqE3KhUeX0pRwg6nbkU7FgxgzqKWHpw9cbXkVP${anno},${mes}${dia}")

.then(function respuesta(respuesta){
    return respuesta.json()
})
.then(function boton(datos){
  document.getElementById("catalogo").innerHTML=`
  <p>${dia}/${mes}/${anno}</p> 
  <p>${datos.date}</p>
<p>${datos.title}</p>
<p>${datos.explanation}</p
  `
}
    

/* .them(function.datos(datos){
  return.respuesta.json():
}
documento.getelementbyid("patata").innerHTML=`
<p>fecha ${datos.date}</p>
<p>titulo ${datos.title}</p>
<p>${datos.explanation}</p>
*/)
