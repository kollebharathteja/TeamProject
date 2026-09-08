// let myId1=document.getElementById("h1");
// let myClass1=document.getElementsByClassName("classH1");
// let myTag1=document.getElementsByTagName("h1");

// let qs=document.querySelector("#h1");
// let qs2=document.querySelector(".classH1");

// h1.innerHTML="<em>hello world changed</em>";
// //let h1=document.getElementById("h1").innertext="hello world changed";
// console.log(qs);
// console.log(qs2);
// console.log(myId1);
// console.log(myClass1);
// console.log(myTag1);
// h1.innerHTML="<em><u>hello world changed</u></em>";

 

let p=document.getElementById("p");
p.innerHTML=parseInt(num1) + parseInt(num2);

// function add(){
   

//     p.innerHTML=parseInt(num1) + parseInt(num2);

// }


btn.onclick=()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    p.innerHTML=parseInt(num1) + parseInt(num2);

}
    
