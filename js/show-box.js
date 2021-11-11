// show total question
var arrow=document.querySelector("#arrow-btn");
var deleteIcon=document.querySelector(".delete-icon");
var mainContainer=document.querySelector(".main-container");
arrow.onclick=function (){
    arrow.parentElement.classList.add("show-box");
    
}
deleteIcon.onclick=function(){
    mainContainer.querySelector(".show-box").classList.remove("show-box");
    
   
}
// icon check for result question
var questions=document.querySelectorAll(".question-btn");
questions.forEach(question=>{
    question.onclick=function(){
        if(this.classList.contains("right")){
            this.classList.add("active");
            this.parentElement.querySelector(".check-icon").classList.add("fa-check")
            this.parentElement.classList.add("done");
        }else{
            this.parentElement.querySelector(".check-icon").classList.add("fa-times")
            this.parentElement.classList.add("done");
        }
    }
})

// submit exam
var btnSubmit=document.querySelector("#submit-exam");
var questionContainer=document.querySelector(".question-container");
var popup=document.querySelector(".popup-wrapper");
btnSubmit.onclick=function(){
    var countResult=questionContainer.querySelectorAll(".done").length
    if(countResult>=2){
        popup.classList.add("show");
        popup.querySelector(".popup-success").parentElement.classList.add("show")
        btnSubmit.setAttribute("disable","");
    }else{
        popup.classList.add("show");
        popup.querySelector(".popup-fail").parentElement.classList.add("show")
    }
}


// final submit
var finalSubmit=document.querySelector("#final-submit");
finalSubmit.onclick=function(){  
        popup.querySelector(".popup-fail").parentElement.classList.remove("show")
        popup.classList.add("show");
        popup.querySelector(".popup-success").parentElement.classList.add("show")
        btnSubmit.setAttribute("disable","");
    
}

// comeback to questions page

var deleteAll=document.querySelectorAll(".delete-popup-btn");
deleteAll.forEach(btn=>{
    btn.onclick=function(){
        popup.classList.remove("show")
    }
})

// // connect columns

// var colLeft=document.querySelectorAll(".col-left");
// var colRight=document.querySelectorAll(".col-right");

// colLeft.forEach(col=>{
//     col.onclick=function(e){
//         console.log(e)
//     }
// })

// var c = document.getElementById("myCanvas1");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0, 25);
// ctx.bezierCurveTo(20, 100, 200, 100, 200, 100);
// ctx.stroke();
// ctx.lineWidth=2;