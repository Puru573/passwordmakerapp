let text=document.querySelector(".textbox");
let button=document.querySelector(".btn");
let progressbar=document.querySelector(".progressbar");


let UpperClassDiv = document.getElementById('upperclass');
let lowerClassDiv = document.getElementById('lowerclass');
let numberClassDiv = document.getElementById('numberclass');
let scharClassDiv = document.getElementById('scharclass');
var count = 0;
let maxCount=100;
let countPassword = document.querySelector(".count_Password");

let btn3=document.querySelector(".btn3progress");
let btn4=document.querySelector(".btn4progress");
let btn5=document.querySelector(".btn5progress");
let btn6=document.querySelector(".btn6progress");



  text.addEventListener("keydown",function(e){

    var key=e.key;
 
    // console.log(key);
    let index=0;
    let i=key.charCodeAt(index);

    if(i>=97 && i<=122){
        lowerClassDiv.checked = true;
        count++;
    }
    if( key=="Backspace" && count>0){
      lowerClassDiv.checked = false;
      count--;

    }
    if(i >= 65 && i <= 90 ){
      UpperClassDiv.checked = true;
      count++;
    }
    if( key=="Backspace" && count>0){
      UpperClassDiv.checked = false;
      count--;

    }


     if(key >= 0 && key <= 9){
      numberClassDiv.checked = true;
      count++;
    }
    if( key=="Backspace" && count>0){
      numberClassDiv.checked = false;
      count--;

    }


    if((i >=  33 && i <= 47 || (i >= 58 && i <= 64) || (i >= 91 && i <= 96) || ( i >= 123 && i <= 126))){
      scharClassDiv.checked = true;
      count++;
    }
    if( key=="Backspace" && count>0){
      scharClassDiv.checked = false;
      count--;

    }
    // console.log(count);


})

function progress(){

    if(count<28){
        count=count===maxCount?maxCount:count+0;
        var newwidth=(count/maxCount)*100 +"%";
        progressbar.style.width=newwidth; //style.width we put in those area where block element sare present
        countPassword.innerHTML=count;

    }
    else{
        return;
    }

 
}
text.addEventListener("keydown",progress);

function strength(){
  text.addEventListener("keydown",function(e){
    var key=e.key;
    if(count==1){
      count=count===maxCount?maxCount:count+0;
      var newwidth=(count/maxCount)*100 +"%";
      btn3.style.width=newwidth; 
    }
    if(key=="Backspace" && count==0){
      btn3.style.width=0; 
    }
    if(count==2){
      count=count===maxCount?maxCount:count+0;
      var newwidth=((count/2)/maxCount)*100 +"%";
      btn4.style.width=newwidth; 
    }
    if(key=="Backspace" && count<2){
      btn4.style.width=0; 
    }
    if(count==4){
      count=count===maxCount?maxCount:count+0;
      var newwidth=((count/4)/maxCount)*100 +"%";
      btn5.style.width=newwidth; 
    }
    if(key=="Backspace" && count<4){
      btn5.style.width=0; 
    }

    if(count==6){
      count=count===maxCount?maxCount:count+0;
      var newwidth=((count/6)/maxCount)*100 +"%";
      btn6.style.width=newwidth; 
    }
    if(key=="Backspace" && count<6){
      btn6.style.width=0; 
    }
    
  })
 
  
}
text.addEventListener("keydown",strength);






   
    

