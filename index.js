
console.log("ji");

let bars = document.querySelector(".header .icon .fa-bars");
let ul = document.querySelector("nav ul");
let times = document.querySelector("ul .fa-times");
let container = document.querySelector(".blogs .container");
let content = document.querySelector(".blogs .content");


bars.onclick = () =>{
bars.classList.toggle("fa-times") ;
ul.classList.toggle("active");
}
times.onclick = () => {
    ul.classList.remove("active");

}
/////////////////toggle////////////////
function toggle(){
    // alert("yes");
    content.classList.toggle("active");
}




// let a = document.querySelector(".btn2");
// let btn_cross = document.querySelector(".blogs-content");
// console.log(btn_cross);

// a.onclick = () => {
//     alert("yesss");
//     btn_cross.classList.toggle("active");
// }

let sortfilter = document.querySelector(".filter-menu").children;
let sortitem = document.querySelector(".filter-item").children;
for(let i=0; i<sortfilter.length; i++){
    sortfilter[i].addEventListener("click", function(){
        for(let j = 0 ; j<sortfilter.length; j++){
    sortfilter[j].classList.remove("active");
}
sortfilter[i].classList.add("active");
let target = this.getAttribute("data-target");
for(let k = 0; k<sortitem.length; k++){
    sortitem[k].classList.remove("active");
    sortitem[k].classList.add("delet");
if(sortitem[k].getAttribute("data-item") == target || target == "*"){
    sortitem[k].classList.add("active");
    sortitem[k].classList.remove("delet");
}
}
    })
}
/////////////////form start///////////////////
function clearErrors(){
    errors = document.getElementsByClassName("form-error");
    for(let item of errors){
        item.innerHTML="";
    }
}


function seterror(id, error){
    // set  inside tag of id
element =document.getElementById(id);
element.getElementsByClassName("form-error")[0].innerHTML = error;

}
function validatform(){
var returnval = true;
clearErrors()
var name = document.forms["myForm"]["fname"].value;
if(name.length < 7){
    seterror("name", "name of length is too short" )  
    returnval = false;
}
if(name.length == "0"){
    seterror("name", "length of name cannot be zero" )  
    returnval = false;
}


// ******email****
var email = document.forms["myForm"]["femail"].value;
// if(email.length > 15){
//     seterror("email", "email of length is too long");
//     returnval = false;
// }

if(email.indexOf("@") <= 0){
    seterror("email", "@ invalid position");
    returnval = false;
}
if((email.charAt(email.length-4) !=".") && (email.charAt(email.length-3)!=".")){
    seterror("email", ". invalid position");
    returnval = false;   
}

// ******phone****
var phone = document.forms["myForm"]["fphone"].value;
if(phone.length != 10 ){
    seterror("phone","number should be 10 digit");
    returnval = false;
}

// ******passord****
var password = document.forms["myForm"]["fpassword"].value;
if(password.length < 6){
    seterror("password","password should be atlest 6 character long");
    returnval = false;
}


// ****** confirm passord****
var cpassword = document.forms["myForm"]["fconfirm-password"].value;
if(cpassword != password){
    seterror("confirm-password"," confirm password  and password should not be match");
    returnval = false;
}
return returnval;
}

////////form and///////////////////


