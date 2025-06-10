function increase(){
count=document.getElementById("number").innerHTML;
previousnumber=parseInt(count)+1;
number.innerHTML=previousnumber;

if (number.innerHTML > 0 ){
    document.getElementById("number").style.color="green";
}
else{
    pass
}
}
function reset(){
document.getElementById("number").innerHTML=0;
document.getElementById("number").style.color="black";
}
function decrease(){
count=document.getElementById("number").innerHTML;
previousnumber=parseInt(count)-1;
number.innerHTML=previousnumber;

if (number.innerHTML < 0 ){
    document.getElementById("number").style.color="red";
}
else{
    pass
}
}