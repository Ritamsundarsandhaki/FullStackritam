function set()
{
    console.log("hi");
    const billin = document.getElementById("billin");
    const persentage = document.getElementById("persentage");
    const person = document.getElementById("person");

    let k = persentage.value;
  let c= (Number(k)/100)*billin.value;
  Number(c)
  let t = c+Number(billin.value)
  let fistDiv = Number(billin.value)/Number(person.value);
  let secDiv = t/Number(person.value);
  let dif = secDiv-fistDiv;
    console.log(k,c)
    console.log(t)
    console.log(dif)
    document.getElementById("out").innerHTML=dif


}