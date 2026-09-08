let inpName = document.getElementById("name");
let age = document.getElementById("age");
let msg = document.getElementById("message");
let btn = document.getElementById("btn1");
let clear = document.getElementById("btn2");

btn.onclick = () => {
    msg.innerHTML = msg.innerHTML  +" "+ inpName.value + " " + Number(age.value) + "!";
};

clear.onclick = () => {
    inpName.value = " ";
    age.value = " ";
};

// clear.onclick = () => {
//     inp.forEach((input) => {
//         input.value = "";
//     })
// };