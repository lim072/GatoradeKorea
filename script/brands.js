const slide = document.querySelector(".slide");
const slides = slide.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;
const more = slide.querySelectorAll("a");
const popUp = document.querySelector(".popUp");
const close = document.querySelector(".close");

for (let i = 0; i < 3; i++)slide.prepend(slide.lastElementChild);

prev.addEventListener("click", movePrev);
next.addEventListener("click", moveNext);


function movePrev(){
    slide.prepend(slide.lastElementChild);
}
function moveNext(){
    slide.append(slide.firstElementChild);
}
more.forEach((el) => {
    el.addEventListener("click",(e)=>{
        e.preventDefault();
        
        let txt = e.currentTarget.closest('li').querySelector("h4").innerText;
        popUp.querySelector("h2").innerText = txt;
       
        let imgSrc = e.currentTarget.closest("li").querySelector(".popUpImg").src;
        popUp.querySelector("img").src = imgSrc;

        let txt2 = e.currentTarget.closest('li').querySelector("p").innerText;
        popUp.querySelector("p").innerText = txt2;
        
        if(popUp.style.left !== "0%"){
        popUp.style.left = "0%";
        }
    })
})

close.addEventListener("click",()=>{
    if(popUp.style.left == "0%"){
    popUp.style.left = "-100%";
    }
})
