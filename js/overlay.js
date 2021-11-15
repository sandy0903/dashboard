var hamManu=document.querySelector(".hamburger-menu");
var box=document.querySelector(".overlay")
hamManu.onclick=function(){
    if(hamManu.classList.contains("toggle")){
        hamManu.classList.remove("toggle")
        box.classList.remove("overlay-box")
    }else{
        hamManu.classList.add("toggle")
        box.classList.add("overlay-box")
    }
    
}