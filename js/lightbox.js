const hamb1 = document.querySelector(".hamburgesa");
const imagenes = document.querySelectorAll(".img-galeria");
const imaganeslight  = document.querySelector(".agregar-imagen");
const contenedorlight = document.querySelector(".imagen-ligth");

// console.log(imaganeslight)

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute('src'));
        
    })
})

contenedorlight.addEventListener("click",e =>{
    if(e.target !== imaganeslight){
        
        contenedorlight.classList.toggle("show");
        imaganeslight.classList.toggle("showimage");  
        hamb1.style.opacity = "1";
    }
})

const aparecerImagen = (imagen)=>{
  imaganeslight.src = imagen;
  contenedorlight.classList.toggle("show");
  imaganeslight.classList.toggle("showimage");
  hamb1.style.opacity = "0";
}