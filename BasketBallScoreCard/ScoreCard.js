
let count=0
let count2=0
let homeEl=document.getElementById("home-el")
let guestEl=document.getElementById("guest-el")
let zeroEl=document.getElementById("home-el")
let zero2El=document.getElementById("guest-el")

function add1(){
    count+=1
    homeEl.innerText=count
   
}
function add2(){
    count+=2
    homeEl.innerText=count
   
}
function add3(){
    count+=3
    homeEl.innerText=count
   
}
function gadd1(){
    count2+=1
    guestEl.innerText=count2
   
}
function gadd2(){
    count2+=2
    guestEl.innerText=count2
   
}
function gadd3(){
    count2+=3
    guestEl.innerText=count2
   
}
function set0(){
zeroEl.innerText=0
zero2El.innerText=0
count=0
count2=0
}