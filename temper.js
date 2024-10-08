const mode=document.querySelector('#mode');
let v=0;
let kelvin=0;
mode.addEventListener('click',function(){
    if(mode.value==='fahrenheit')
    {
        v=1;
    }
})
const temp=document.querySelector('#temp');
const submit=document.querySelector('#submit');
const final=document.querySelector('#answer');

submit.addEventListener('click',function(){
   // console.log(parseInt(temp.value))
const input=parseInt(temp.value);

    if(v===0){
        kelvin=input+273.15;
        
    }
    if(v===1){
        kelvin=(input+459.67)*(5/9);
        
    }

    final.innerText=kelvin+"K";
})
const reset=document.querySelector('#reset');
reset.addEventListener('click',()=>{
    kelvin=0;
    final.innerText=kelvin;
})