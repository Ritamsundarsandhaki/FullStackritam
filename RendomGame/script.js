let ren = Math.floor((Math.random()*100)+1);
    console.log(ren)

    let attamat = 0;
function set()
{
    if(attamat>10)
    {
        alert("you have no more atatampt ")
        document.getElementById("att")="you have no more attampt";
        return;
    }
    
    let inputval = document.getElementById("in").value;
    const out = document.getElementById("out");
    document.getElementById("att").innerHTML=attamat;
    if(inputval>ren)
    {
        out.innerHTML="The value is lesser"
    }
    else if(inputval<ren)
    {
        out.innerHTML="The value is Greter"
    }
    else if(inputval==ren){
        out.innerHTML="you win"
    }
    attamat++;
}
    