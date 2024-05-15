const passlength=document.getElementById("length")
const ulcheck=document.getElementById("ul")
const locheck=document.getElementById("lo")
const numcheck=document.getElementById("num")
const specheck=document.getElementById("spe")

const result=document.getElementById("result")


function Generate(){
    if(passlength.value>16){
        alert("Password must be  less than 16 characters");
        return ;
    }else {
        let password="";
        let char="";
        uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        lowercase="abcdefghijklmnopqrstuvwxyz";
        number="0123456789";
        character="@#$_&?.";

        if(ulcheck.checked){
        char+=uppercase;
         }
         if(locheck.checked){
            char+=lowercase;
        }
        if(numcheck.checked){
            char+=number;

        }if(specheck.checked){
            char+=character;
        }
        
    


    let passArray=char.split("")
    for(let i=0;i< passlength.value;i++){
        let index=Math.round(Math.random() * passArray.length)
        console.log(index);
        password+=passArray[index];
    }
     result.innerHTML=`${password} <button class="regenerate" onclick="Generate();">button</button>`;
     
    }

     
}