
const set2 = document.getElementById("set2"); 
const set3 = document.getElementById("set3"); 
const set4 = document.getElementById("set4"); 
const set5 = document.getElementById("set5"); 
const set6 = document.getElementById("set6"); 
let  count = 2;
function set()
{
    console.log("hi");
   
    if(count==2)
    {
        set2.classList='sec2-ani';
    }
    else if(count==3)
   {
        set3.classList='sec3-ani';
   }else if(count==4)
   {
    set4.classList='sec4-ani';
   }else if(count==5)
   {
    set5.classList='sec5-ani';
   }else if(count==6)
   {
    set6.classList='sec6-ani';
   }
    console.log(count)
    count=count+1;
}

function unset()
{

    set2.classList='sec2';
}
const fullname = document.getElementById("fullname");
const dob = document.getElementById('dob');
function submit()
{
    console.log(fullname.value)
    let k = Number(dob.value);
    console.log('dob',k+1);

    if(!/^[A-z\s]+$/.test(fullname.value.trim()))
    {
        alert('invald');
    }
}