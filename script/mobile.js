const btn = document.querySelector(".gnbButton");
const menu = document.querySelector(".gnbMobile");

btn.addEventListener("click",()=>{
    if(menu.style.left !== "0px"){
        menu.style.left = "0px";
    }else{
        menu.style.left = "-500px";
    }
})