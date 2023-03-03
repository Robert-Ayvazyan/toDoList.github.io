let textInputic = [];
const input = document.querySelector('#input');

function stanalArjeq(arj){
    textInputic = arj;

}

function add(){
    let li = document.createElement('li');
    li.innerText = textInputic;
     input.value = "";
    let ul = document.querySelector('ul')
    ul.appendChild(li);
    
}


function del(){
    let list  = document.getElementById('tasks');
    list.removeChild(list.childNodes[0]);

}
