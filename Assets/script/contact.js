console.log("JS Connected....");
// variables
let fullName = document.querySelector("#fullName");
let mobile = document.querySelector("#mobile");
let email = document.querySelector("#email");
let typeQ = document.querySelector("#typeQ");
let Addbtn = document.querySelector("#Addbtn");
let userCard = document.getElementById("userCard");
let cardUi = "";

let data = [];
// function
const addUser = (e) => {
    e.preventDefault();
    let users = {
        name: fullName.value,
        mobile : mobile.value,
        email : email.value,
        typeQ : typeQ.value
    }
    console.log("Users = ",users);
    data.push(users);
    console.log("Data = ",data);

// let UserDetails = data.map((item, key) => {
//     console.log("Item = ",item.name);
//     return(cardUi +=  `<div class="Card" id=${key}>
//         <h1>${item.name}</h1>
//         <h1>${item.mobile}</h1>
//         <h1>${item.email}</h1>
//         <h1>${item.typeQ}</h1>
//         </div>`

//     );
// })

userCard.innerHTML = cardUi ;
// console.log("User Details = ",UserDetails);


}
// eventlistener 
Addbtn.addEventListener('click', addUser);