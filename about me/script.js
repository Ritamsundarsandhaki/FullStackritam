function call(flage) {
  if (flage == 1) {
    const ob = document.getElementById("set1");
    ob.classList = "info-adout-ani";
  } else if (flage == 2) {
    const slider =document.getElementById("sl");
    slider.style.left='28.2%'
    const ob = document.getElementById("set2");
    ob.classList = "info-adout-ani";
  } else if (flage == 3) {
     const slider =document.getElementById("sl");
    slider.style.left='39.2%'
    const ob = document.getElementById("set3");
    ob.classList = "info-adout-ani";
  } else if (flage == 4) {
     const slider =document.getElementById("sl");
    slider.style.left='49.9%'
    const ob = document.getElementById("set4");
    ob.classList = "info-adout-ani";
  }else if (flage == 5) {
    const slider =document.getElementById("sl");
    slider.style.left='60.5%'
    const ob = document.getElementById("set5");
    ob.classList = "info-adout-ani";
  }
  else if(flage==6)
    {
        const slider =document.getElementById("sl");
    slider.style.left='71.5%'
     const ob = document.getElementById("set6")
       ob.classList='info-adout-ani';
    }
}
