

const list = document.getElementById("List");
    const input = document.getElementById("in");
    var li = document.getElementById('note')
    
function set()
{
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');


    button.textContent='Delete';
    button.classList='del';
    span.textContent=input.value;
    li.appendChild(span);
    li.appendChild(button);
    console.log(li);
    list.appendChild(li);

    button.onclick=()=>{
        li.remove(li)
    }
    

}
const q = document.getElementById("q");
const i = document.querySelectorAll(".del");
function to()
{
    li.removeChild(li.children[1])
    i.classList='fa-regular fa-circle-xmark';
    li.appendChild(i)
}
function call()
{
    list.removeChild(list.children[0])
}


