const mainNow = document.querySelector("#mainNow");
const mainBrand = document.querySelector("#mainBrand");
const mainStory = document.querySelector("#mainStory");
const mainCompany = document.querySelector("#mainCompany");
const articles = document.querySelectorAll("main>article");

let posArr = [];
// [150, 950, 1750, 2550]
setPos();
function setPos(){
    posArr = [];
    for(let el of articles){
        posArr.push(el.offsetTop);
    }
}

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 0){
        mainNow.style.right = "0"
    }
    if(window.pageYOffset > 750){
        mainBrand.style.left = "0"
    }
    if(window.pageYOffset > 1550){
        mainStory.style.right = "0"
    }
    if(window.pageYOffset > 2350){
        mainCompany.style.left = "0"
    }    
})