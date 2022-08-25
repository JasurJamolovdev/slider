const images = document.getElementById("images");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const img = document.querySelectorAll("#images img");

let idx = 0; 

function changeImage() {
    if(idx > img.length - 1){
        idx = 0; 
    } else if(idx < 0){
        idx = img.length - 1;
    }
    images.style.transform = `translateX(${-idx * 500}px)`;
}
rightbtn.addEventListener("click", () => {
    idx++;
    resetInterval();
    changeImage();
});
leftbtn.addEventListener("click", () => {
    idx--;
    resetInterval();
    changeImage();
});

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
