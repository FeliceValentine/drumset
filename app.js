let A = document.getElementById("A");
let S = document.getElementById("S");
let D = document.getElementById("D");
let F = document.getElementById("F");
let G = document.getElementById("G");
let H = document.getElementById("H");
let J = document.getElementById("J");
let K = document.getElementById("K");
let L = document.getElementById("L");


A.addEventListener("click", event =>{
    document.getElementById("aclick").play();
})
S.addEventListener("click", event =>{
    document.getElementById("sclick").play();
})
D.addEventListener("click", event =>{
    document.getElementById("dclick").play();
})
F.addEventListener("click", event =>{
    document.getElementById("fclick").play();
})
G.addEventListener("click", event =>{
    document.getElementById("gclick").play();
})
H.addEventListener("click", event =>{
    document.getElementById("hclick").play();
})
J.addEventListener("click", event =>{
    document.getElementById("jclick").play();
})
K.addEventListener("click", event =>{
    document.getElementById("kc").play();
})
L.addEventListener("click", event =>{
    document.getElementById("lclick").play();
})

A.addEventListener("keydown", event =>{
    if(event.key == 65){
    document.getElementById("aclick").play();}
})
