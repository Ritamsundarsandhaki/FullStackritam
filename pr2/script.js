function data(){
    console.log("hi");
 let a=document.getElementById("name").value;
 let b=document.getElementById("email").value;
 let gender=document.querySelector('input[name="gender"]:checked').value;
    console.log(a);
    console.log(b);
    console.log(gender);
    c();
    document.getElementById("dat").innerHTML="<div>"+a+"</div>";
}

function c(){
    console.log("hi");
}