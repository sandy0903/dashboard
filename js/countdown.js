var countdownTimer=document.querySelector("#countdown-timer");
var countdownWrapper;
var btnSubmit=document.querySelector("#submit-exam");

document.addEventListener("DOMContentLoaded",()=>{
    if(countdownTimer.parentElement.classList.contains("item-link")){
        countdownWrapper=countdownTimer.parentElement;
    }
    var coundownDate=new Date("Nov 11 2021 12:59:26").getTime();
    var x=setInterval(()=>{
        var currentTime=new Date().getTime();
        var distance= coundownDate-currentTime;
       
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownTimer.innerHTML=hours + "h "+ minutes + "m " + seconds + "s ";
        btnSubmit.setAttribute("disable","");
        if (distance < 0) {
            clearInterval(x);
            if(countdownWrapper){
                countdownWrapper.innerHTML=
                `<i class="fas fa-clipboard-list"></i>
                <button class="btn primary-bg">
                    <a href="./bai-thi.html" target="_blank">Tham gia thi</a>
                </button>`
            }else{
                countdownTimer.innerHTML="";
                btnSubmit.removeAttribute("disable");
                
            }
            
          }
    },1000)
   
    
})