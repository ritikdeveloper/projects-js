const button = document.querySelector('.Convert');
export function print(value){
let output=document.querySelector('.result');
output.innerText=value;
console.log(value);
}
export function buttonevent(){
button.addEventListener('click',()=>{
    let values=document.querySelector('.Temperature-input').value;
    const taken=document.querySelector('.convert-value-unit').value;
    const given=document.querySelector('.given-value-unit').value;
    values=Number(values);
    if(given==='K'){
        if(taken=='K'){
            print(values);
        }else if(taken=='C'){
            print(kToc(values));
        }
            else if(taken=='F'){
                    values=kToc(values);
                    print(cTof(values));

            }
    }
    else if(given=='C'){
        if(taken=='K'){
            print(cTok(values));
        }else if(taken=='C'){
            print(values);
        }
            else if(taken=='F'){
                print(cTof(values));
                
            }

    }
    else if(given=='F'){
        if(taken=='K'){
            values=fToc(values);
            print(cTok(values));
            
        }else if(taken=='C'){
            print(fToc(values));

        }
            else if(taken=='F'){
                print(values);
            }

    }
    else{

    }

   
})}


function kToc(value){
    value=value-273.15;
    return value;
    
    }
    function cTok(value){
    value=value+273.15;
    return value;
    }
    function cTof(value){
    value=value*(9/5);
    value=value+32;
    return value;
    
    }
    function fToc(value){
    value=value-32;
    value=value*(5/9);
    
    return value;
    
    }