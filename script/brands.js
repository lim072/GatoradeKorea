const slide = document.querySelector(".slide");
const slides = slide.children;
const btns = document.querySelector(".btns");
const [prev, next] = btns.children;


for (let i = 0; i < 2; i++)slide.prepend(slide.lastElementChild);

prev.addEventListener("click", movePrev);
next.addEventListener("click", moveNext);


function movePrev(){
    slide.prepend(slide.lastElementChild);
}
function moveNext(){
    slide.append(slide.firstElementChild);
}