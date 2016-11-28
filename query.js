   var item = [];

function toDo() {
       var value = document.getElementById('description').value;
       var list  = document.getElementById("list");
       list.innerHTML =  " ";
     
       item.push(value);

       for (var i = 1; i < item.length ; i++) {
          
          list.innerHTML += "<p id='listItem'>" + i + " " +  item[i] + "<button value='i' id='delete'>X</button></p>";
     
        }
        
       
} 
        