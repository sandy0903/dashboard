var countdownTimer=document.querySelector("#countdown-timer");
var countdownWrapper;
var btnSubmit=document.querySelector("#submit-exam");

document.addEventListener("DOMContentLoaded",()=>{
    if(countdownTimer.parentElement.classList.contains("item-link")){
        countdownWrapper=countdownTimer.parentElement;
    }
    var coundownDate=new Date("Nov 14 2021 23:59:00").getTime();
    var x=setInterval(()=>{
        var currentTime=new Date().getTime();
        var distance= coundownDate-currentTime;
       
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownTimer.innerHTML=hours + "h "+ minutes + "m " + seconds + "s ";
        
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
                
                
            }
            
          }
    },1000)
   
    
})