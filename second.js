var ms = 0, s = 0, m = 0, h = 0;
var timer;

 var display = document.querySelector('.timer_display')
 var laps = document.querySelector('.laps')

 function start(){
    if(!timer){
        timer = setInterval(run , 10);
    }
 }

 function run(){
    display.innerHTML = getTimer()
    ms++
    if(ms == 100){
        s++;
        ms=0;
    }
    if(s==60){
        m++;
        s=0;
    }
    if(m==60){
        h++;
        m=0;
    }
 }

 function pause(){
    stopTimer()
 }

 function stopTimer(){
    clearInterval(timer)
    timer=false
 }

 function reset(){
    stopTimer()
    ms=0
    s=0
    m=0
    h=0
    display.innerHTML=getTimer()
 }

 function lap(){
    if(timer){
        var li =document.createElement("li")
        li.innerHTML=getTimer()
        laps.appendChild(li)
    }
 }

 function resetLap(){
    laps.innerHTML=""
 }
 function getTimer(){
    return(h<10 ? "0"+ h:h)+":"+(m<10 ? "0"+ m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
 }
