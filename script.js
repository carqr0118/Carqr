function createQR(){

let name=document.getElementById("name").value
let car=document.getElementById("car").value
let number=document.getElementById("number").value
let phone=document.getElementById("phone").value

let link="view.html?name="+encodeURIComponent(name)+
"&car="+encodeURIComponent(car)+
"&number="+encodeURIComponent(number)+
"&phone="+encodeURIComponent(phone)

let qr="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+encodeURIComponent(link)

let canvas=document.getElementById("qr")
let ctx=canvas.getContext("2d")

let img=new Image()

img.onload=function(){

canvas.width=250
canvas.height=250

ctx.drawImage(img,0,0)

}

img.src=qr

}