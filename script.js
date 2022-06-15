let count = 0;
const counterValue=document.querySelector("#value");
const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const className=e.currentTarget.classList;
        if(className.contains('decrease')){
            count --;
        }
        else if(className.contains(("increase"))){
            count ++;
        }
        else{
            count = 0;
        }
        value.textContent=count;
});

});