 let main=document.querySelector('#outerbody');
console.log(main);
let butt1=document.querySelector('#b1');
let butt2=document.querySelector("#b2");
let butt3=document.querySelector('#b3');
let com= Math.floor(Math.random()*3)
let rese=document.querySelector("#reset");
console.log(com);
console.log(butt1,butt2,butt3);
let user;
let declaration;
let comc;
butt1.onclick=()=>{
   if(com==0){
        console.log("draw");
        declaration= document.createElement("h1");
        declaration.innerText="DRAW";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
        comc=document.createElement("h1");
        comc.innerText="computer chooses rock";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;

   }else if(com==1){
        console.log("computer wins");
         declaration= document.createElement("h1");
        declaration.innerText="computer wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses paper";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }else{
        console.log("player1 wins");
         declaration= document.createElement("h1");
        declaration.innerText="player1 wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses scissor";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }
}
butt2.onclick=()=>{
   if(com==0){
        console.log("player wins");
         declaration= document.createElement("h1");
        declaration.innerText="player1 wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses rock";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
       
   }else if(com==1){
        console.log("draw");
         declaration= document.createElement("h1");
        declaration.innerText="DRAW";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses paper";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }else{
        console.log("computer wins");
          declaration= document.createElement("h1");
        declaration.innerText="computer wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses scissor";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }
   }

butt3.onclick=()=>{
   if(com==0){
        console.log("computer wins");
          declaration= document.createElement("h1");
        declaration.innerText="computer wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
           comc=document.createElement("h1");
        comc.innerText="computer chooses rock";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }else if(com==1){
        console.log("player wins");
         declaration= document.createElement("h1");
        declaration.innerText="player1 wins";
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses paper";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }else{
        console.log("draw");
          declaration= document.createElement("h1");
        declaration.innerText="DRAW",com;
        main.prepend(declaration);
        declaration.setAttribute("id","dec");
         comc=document.createElement("h1");
        comc.innerText="computer chooses scissor";
        main.prepend(comc);
        comc.setAttribute("id","dec");
        butt1.disabled=true;
        butt2.disabled=true;
        butt3.disabled=true;
   }
   }
   



rese.onclick=()=>{
      com= Math.floor(Math.random()*3);
      console.log("new=",com);
      declaration.remove();
      comc.remove();
       butt1.disabled=false;
        butt2.disabled=false;
        butt3.disabled=false;


}