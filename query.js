   var item = [];
var data = "";
function toDo() {
       var value = document.getElementById('description').value;
       var list  = document.getElementById("list");
       list.innerHTML =  " ";
     if(value == "" ){
         alert("Please Enter Something in Field");
     }else{
       item.push(value);  
     }
        diplay();
        data = " ";    
       document.getElementById('description').value = "";
  }
  function diplay() {
       for (var i = 0; i < item.length ; i++) {
          
          data += "<p id='listItem'>" + (i) + " - " +  item[i] + "<button id='delete' onclick='remove(" + i + ");'>X</button></p>";
          list.innerHTML = data;
        }
       data = " "; 
  } 
function remove(remov) {
    var id  = document.getElementById('delete');
    item.splice(remov,1);
    diplay();
}        