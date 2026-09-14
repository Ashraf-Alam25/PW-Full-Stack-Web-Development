const btn = document.getElementById("button");
function randomColor() {
    let val = "ABCDEF0123456789";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons += val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click",changeRandomColor);