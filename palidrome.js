let name=document.querySelector('#name');
let button=document.querySelector('submit');
let form=document.querySelector('form');
form.addEventListener("submit",function palidromecheck(){
     let ch=/[^a-zA-Z]/g;
     let name1=name.value;
    name1=name1.toLowerCase().replace(ch,'');
    let len=name1.length;
   for(let i=0;i<len/2;i++){
       if(name1[i]==name1[len-1-i]){
           console.log("Palidrome");
       }
       else{
           console.log("Not Palidrome");
       }
    }
});
     
    