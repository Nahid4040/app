var removeBtn =  '<i class="fa fa-trash" aria-hidden="true"></i>'
var compeletBtn ='<i class="fa fa-check-circle" aria-hidden="true"></i>'

document.getElementById("btn").addEventListener("click",function(){
   var value = document.getElementById("item").value;
   if(value) 
   {
      addItemTodo(value);
      document.getElementById("item").value;}
})


//for remove

function  rmbbtn(){
   var hlw = this.parentNode.parentNode;
   var paren=hlw.parentNode;
       paren.removeChild(hlw)
}



//fpr compelet

function completeBTN(){
   var item = this.parentNode.parentNode;
   var parent=item.parentNode;
   var id = parent.id;   
    



var target = ( id=== "todo") ? document.getElementById('completed'):document.getElementById('todo');

parent.removeChild(item);
target.insertBefore(item, target.childNodes[0])


}







function addItemTodo(text ){
    var list = document.getElementById("todo");
    


   var item = document.createElement("li");
   item.innerHTML = text;


   var buttons = document.createElement("div");
   buttons.classList.add("buttons");


   var remove = document.createElement("button");
   remove.classList.add("remove");
   remove.innerHTML = removeBtn;
//      rmb btn
remove.addEventListener("click", rmbbtn);



   var complete = document.createElement("button");
   complete.classList.add("complet");
   complete.innerHTML = compeletBtn;
//cmpltbtn
complete.addEventListener("click", completeBTN);



   buttons.appendChild(remove);
   buttons.appendChild(complete);
   item.appendChild(buttons);

   list.prepend(item);
  
}
