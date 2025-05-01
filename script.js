const btn = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let eraser = document.querySelector("#eraser");
let Equal= document.querySelector("#equal");
let DE= document.querySelector("#DE");

btn.forEach(btn => {
   btn.addEventListener("click",() =>{
 
     input.value += btn.innerText;
   })})
eraser.addEventListener("click", ()=>{
    input.value = "";
})

Equal.addEventListener("click", ()=>{
   input.value = eval(input.value);

})
DE.addEventListener("click", ()=>{
   input.value = input.value.toString().slice(0,-1);
})
