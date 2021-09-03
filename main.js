var inScernn = document.getElementById('screnn')
function display(num){
   inScernn.value += num;
}
function Ecual(){
  inScernn.value = eval(inScernn.value);
}


function Clear(){
  inScernn.value = "";
}

function del(){
  inScernn.value = inScernn.value.slice(0,-1);
}
