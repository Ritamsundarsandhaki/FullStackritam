
var point ='';

function set(num)
{
 point=   point+num;
 console.log(point);
    document.getElementById("val").innerHTML=point;
    
}
function eq()
{
    let val =eval(point);
    document.getElementById("val").innerHTML=val;
}
function rstart()
{
    document.getElementById("val").innerHTML='0';
    point='';
}
