let display=document.getElementById('display');
let butten= Array.from( document.getElementsByClassName('butten'));
console.log(butten);
butten.map(butten =>{
    butten.addEventListener('click',(e)=>{
       switch(e.target.innerText)
       {   case 'Clear':
                 display.innerText ='';
                 break;
            case '←':
                if(display.innerText)
                {
                display.innerText = display.innerText.slice(0,-1);
                break;
                }
            case '=':
                try{
                display.innerText =eval(display.innerText);
                
                }
                catch
                {
                    display.innerText ='Error!';
                }
                break;
            
           default:
           display.innerText += e.target.innerText;

       }
    })
})