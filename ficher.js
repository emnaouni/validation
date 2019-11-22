// let add=document.getElementById("add");
// let mdp=Document.getElementById("PS");

// document.getElementById("validation").addEventListener("click",function(){
//   if(( add.value ==="")||(mdp.value===""))
//   alert (" remplir les champs du text");
// })

// document.getElementById("validation").addEventListener("click",function(){
//     let x = document.forms["form"]["name"];
//     for (let i = 0; i < x.length-1 ;i++) {
//         if (x.[i].value ==="")
//         alert (" remplir les champs du text");
//       }
    
// })
const patterns = {
  firstname: /^[a-z]{2,20}$/,
  lastname: /^[a-z]{2,20}$/,
  address: /^[a-z\d\.-]{2,50}$/,
  email: /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
};
const theForm = document.querySelectorAll("input, textarea");
const resetBtn = document.getElementById("Reset");
const inputs = document.querySelectorAll("input");
const sendBtn = document.getElementById("validation");
const textArea = document.querySelector("textarea");
inputs.forEach(input => {
    input.addEventListener("keyup", e => {
      let target = e.target;
    //   validation(target, target.name);
    });
  });

sendBtn.addEventListener("click", e => {
  e.preventDefault()
     inputs.forEach(input => {
      if (input.value === ""){
       return alert(`Please verify your ${input.name}`);
       
      } else {
        input.value = "";
        textArea.value = "";
         
      }
    });
   let v =  inputs.every(el => el.value !== "");
    if (v) {return alert("Thank you for your Feeback");
  console.log(v)};
  });
  //   function validation(x, y) {
    //     let value = x.value.replace(/\s/g, "");
//     let result = patterns[y].test(value);
//     if (result) {
//       x.classList.replace("invalid", "valid");
//     } else {
//       x.classList.add("invalid");
//     }
//   }
  
document.getElementById("PS").addEventListener("change",function(){
  
    var regexTel =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
    let y=document.getElementById("PS").value;
    if( regexTel.test(y)==false)
    alert("mot de pass incorrect");
    
})
document.getElementById("add").addEventListener("change",function(){
    var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
    let y=document.getElementById("add").value;
    if( regex.test(y)==false)
    alert("adresse mail incorrecte");
})
for (let i = 0; i < theForm.length; i++) {
    resetBtn.addEventListener("click", e => {
      e.preventDefault();
      theForm[i].value = "";
    });
  }

