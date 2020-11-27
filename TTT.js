var boxes = document.querySelectorAll(".box");
var reset = document.querySelector("button");
var span = document.querySelector("#message");
var ist=true;
var count=0;


reset.addEventListener("click", function(){
    count=0;
    for(var i=0; i<9; i++)
    {
        boxes[i].textContent="";
        boxes[i].style.backgroundColor=null;
    }
    span.textContent="SELECT A BOX!";
    ist=true;
    
    
});

for(var i=0; i<9; i++)
{
    boxes[i].addEventListener("click", function(){
        
        if(count%2==0 && this.textContent=="" && ist)
        {
            this.textContent="O";
            count++;
            check();
        }
        else if(count%2==1 && this.textContent=="" && ist)
        {
            this.textContent="X";
            count++;
            check();
        }
        
        
        
    });

};

function check()
{
    if(boxes[0].textContent===boxes[1].textContent && boxes[0].textContent===boxes[2].textContent && boxes[0].textContent!="")
    {
        span.textContent="'"+boxes[0].textContent+"' WON";
        boxes[0].style.backgroundColor="green";
        boxes[1].style.backgroundColor="green";
        boxes[2].style.backgroundColor="green";
        ist=false;
    }
    else if(boxes[3].textContent===boxes[4].textContent && boxes[3].textContent===boxes[5].textContent && boxes[5].textContent!="")
    {
        span.textContent="'"+boxes[3].textContent+"' WON";
        boxes[3].style.backgroundColor="green";
        boxes[4].style.backgroundColor="green";
        boxes[5].style.backgroundColor="green";
        ist=false;

    }
    else if(boxes[6].textContent===boxes[7].textContent && boxes[6].textContent===boxes[8].textContent && boxes[8].textContent!="")
    {
        span.textContent="'"+boxes[6].textContent+"' WON";
        boxes[6].style.backgroundColor="green";
        boxes[7].style.backgroundColor="green";
        boxes[8].style.backgroundColor="green";
        ist=false;

    }
    else if(boxes[0].textContent===boxes[3].textContent && boxes[3].textContent===boxes[6].textContent && boxes[6].textContent!="")
    {
        span.textContent="'"+boxes[0].textContent+"' WON";
        boxes[0].style.backgroundColor="green";
        boxes[3].style.backgroundColor="green";
        boxes[6].style.backgroundColor="green";
        ist=false;

    }
    else if(boxes[1].textContent===boxes[4].textContent && boxes[4].textContent===boxes[7].textContent && boxes[7].textContent!="")
    {
        span.textContent="'"+boxes[1].textContent+"' WON";
        boxes[4].style.backgroundColor="green";
        boxes[1].style.backgroundColor="green";
        boxes[7].style.backgroundColor="green";
        ist=false;

    }
    else if(boxes[2].textContent===boxes[5].textContent && boxes[5].textContent===boxes[8].textContent && boxes[8].textContent!="")
    {
        span.textContent="'"+boxes[2].textContent+"' WON";
        boxes[5].style.backgroundColor="green";
        boxes[8].style.backgroundColor="green";
        boxes[2].style.backgroundColor="green";
        ist=false;
    }
    else if(boxes[0].textContent===boxes[4].textContent && boxes[4].textContent===boxes[8].textContent && boxes[8].textContent!="")
    {
        span.textContent="'"+boxes[0].textContent+"' WON";
        boxes[0].style.backgroundColor="green";
        boxes[4].style.backgroundColor="green";
        boxes[8].style.backgroundColor="green";
        ist=false;
    }
    else if(boxes[2].textContent===boxes[4].textContent && boxes[4].textContent===boxes[6].textContent && boxes[6].textContent!="")
    {
        span.textContent="'"+boxes[2].textContent+"' WON";
        boxes[4].style.backgroundColor="green";
        boxes[6].style.backgroundColor="green";
        boxes[2].style.backgroundColor="green";
        ist=false;
    }
   

};

