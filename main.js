// let mailser=document.querySelector("input");
let button=document.querySelector(".subscribe");
let error=document.querySelector(".error");
let success=document.querySelector(".success");
let dismissBtn=document.querySelector(".dismiss");
let mailid=document.querySelector(".mailid");
button.addEventListener("click",function(){
    let email=mail.value;
    console.log(email);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(pattern.test(email)){
        // alert("Email is valid");
        error.classList.add("hide")
        mailid.innerHTML=email;
        document.querySelector(".container").style.display="block";
        document.querySelector("section").classList.add("hide");


        
    }
    else{
        error.classList.remove("hide")
        document.querySelector("input").style.background="hsl(4,100%,67%,30%)"

    }

})
dismiss.addEventListener("click",()=>{
    
    document.querySelector(".container").style.display="none";
    document.querySelector("section").classList.remove("hide");
    mail.value="";


})