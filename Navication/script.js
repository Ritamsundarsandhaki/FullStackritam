function set (num)
{

    if(num==1)
    {
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const box3 = document.getElementById("box3");
        const box4 = document.getElementById("box4");
        const box5 = document.getElementById("box5");
        box1.classList="info";
        box2.classList="infoSet";
        box3.classList="infoSet";
        box4.classList="infoSet";
        box5.classList="infoSet";
        
        return;
    }
   else if(num==2)
   {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");

    box2.classList="info";
    box1.classList="infoSet";
    box3.classList="infoSet";
    box4.classList="infoSet";
    box5.classList="infoSet";
   
   }
   else if(num==3)
   {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");

    box3.classList="info";
    box2.classList="infoSet";
    box1.classList="infoSet";
    box4.classList="infoSet";
    box5.classList="infoSet";
    
   }
    else if(num==4)
    {
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const box3 = document.getElementById("box3");
        const box4 = document.getElementById("box4");
        const box5 = document.getElementById("box5");
    
        box4.classList="info";
        box2.classList="infoSet";
        box3.classList="infoSet";
        box1.classList="infoSet";
        box5.classList="infoSet";
       
    }

    
}