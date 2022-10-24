
const hamb = document.querySelector(".hamburgesa");
const menu = document.querySelector(".menu-navegacion");

console.log(hamb);
console.log(menu);

hamb.addEventListener("click", () =>{
    menu.classList.toggle("show");
})
window.addEventListener("click", e=>{

    if(menu.classList.contains("show") && e.target != menu && e.target != hamb){
        menu.classList.toggle("show");  
    }
})