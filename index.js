let inputslider=document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox=document.getElementById("passbox");
let lowercase= document.getElementById("lowercase");
let number= document.getElementById("number");
let uppercase= document.getElementById("uppercase");
let symbol= document.getElementById("symbol");
let genbtn= document.getElementById("genbtn");
let copyItem=document.getElementById("copycontent");






slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>slidervalue.textContent=inputslider.value);

genbtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
});

// write generatePassword function
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSymbols="~@!#4%^&*";



function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars += lowercase.checked ? lowerChars: "";
    allChars += uppercase.checked ? upperChars: "";
    allChars += number.checked ? allNumbers: "";
    allChars += symbol.checked ? allSymbols: "";
      

    if (allChars == ""|| allChars.length == 0)
    {
        return genPassword;
    }
        


    // for more character as password , we need to traverse by a loop
    let i=1; 
    while (i<=inputslider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
      i++;
    }
        




    // genPassword=lowerChars.charAt(Math.floor(Math.random()*lowerChars.length));
      
     return genPassword;
    
    
}

copyItem.addEventListener('click',()=>{

    if(passbox.value !=""||passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value);

        copyItem.innerText="check";
        copyItem.title="password copied";

        setTimeout(()=>{
            copyItem.innerText="content_copy";
            copyItem.title="";
        },3000);

    }
    

});