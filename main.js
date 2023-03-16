// header slider
let currentBackground = 0;
const header = document.querySelector("#homeHeader");

const headerPrev = document.querySelector("#headerPrev");
headerPrev.addEventListener("click", () => {
    if (currentBackground >= 1) currentBackground--;
    else currentBackground = 3;
    header.style.backgroundImage = "url('img/background" + currentBackground + ".jpg')";
})

const headerNext = document.querySelector("#headerNext");
headerNext.addEventListener("click", () => {
    if (currentBackground <= 2) currentBackground++;
    else currentBackground = 0;
    header.style.backgroundImage = "url('img/background" + currentBackground + ".jpg')";
})