const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
console.log(bodyEl);

inputEl.checked = JSON.parse(localStorage.getItem("mood")) ;

updateBody()

inputEl.addEventListener("input", ()=>{
    updateBody()
    updateLocalStorage()
})


function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black"
     }else{
        bodyEl.style.background = "white"
    
     }
}


function updateLocalStorage(){
    localStorage.setItem("mood", JSON.stringify(inputEl.checked))
}