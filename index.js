// const todoList = [];
// const todoListElement = document.querySelector("#todo-list-ul");
// //to add event listner to add button
// document.querySelector("#add_button").addEventListener("click", addToDo);
// function keypressTodoTextHandler(e) {
//   console.log(e);
//   if (e.keyCode == 13 && e.shiftKey ) {
//     addToDo();
// }
// }

// function addToDo() {
//   //grab the text that is entered
//   const todoText = document.querySelector("#todo_text").value;
//   if (todoText == "") {
//     return;
//   } else {
//     const todoObject = {
//       id: todoList.length,
//       todoText: todoText,
//       isDone: false,
//     };
//     todoList.unshift(todoObject);
//     //DISPLAY THE ADDED TASK
//     displayTodos(); //call this function to display new task
//   }
// }

// function displayTodos() {
//   todoListElement.innerHTML = "";
//   document.querySelector("#todo_text").value = "";
//   //render list items inside the ul tag
//   todoList.forEach((item) => {
//     const listElement = document.createElement("li");
//     listElement.innerHTML = item.todoText;
//     //making delete button /icoon with font awesome
//     const delBtn = document.createElement("i");
//     delBtn.setAttribute("data-id", item.id);
//     delBtn.classList.add("fa");
//     delBtn.classList.add("fa-trash-o");
//     if (item.isDone) {
//       listElement.setAttribute("class", "checked");
//     }
//     listElement.setAttribute("data-id", item.id);

//     //ADD EVENT TO LIST ITEM
//     listElement.addEventListener("click", function (e) {
//       const selectedID = e.target.getAttribute("data-id");
//       console.log(selectedID);
//       doneToDo(selectedID);
//     });

//     delBtn.addEventListener("click", function (e) {
//       const delId = e.target.getAttribute("data-id");
//       deleteItem(delId);
//     });

//     todoListElement.appendChild(listElement);
//     listElement.appendChild(delBtn);
//   });
// }

// function deleteItem(delId) {
//   const deleteIndex = todoList.findIndex((item) => item.id == delId);
//   todoList.splice(deleteIndex, 1);
//     displayTodos();

// }

// function doneToDo(selectedID) {
//   const selectedIdIndex = todoList.findIndex((item) => item.id == selectedID);
//   console.log(todoList[selectedIdIndex]);
//   if(selectedIdIndex==-1){
//     return
//   }else{

  
//   todoList[selectedIdIndex].isDone
//     ? (todoList[selectedIdIndex].isDone = false)
//     : (todoList[selectedIdIndex].isDone = true);
//   console.log(todoList[selectedIdIndex]);
//   displayTodos();
// }
// }

// /* 
// fun mySum(a,b,c){
//   let a=20;
//  let b=30;
//  let c=10;
//  let total =(a+b+c);
//  console.log(total);


// }

// */
const todo_list = []; 
let addToDo; 
const todo_list_element = document.querySelector("#todo-list-ul"); 


class Display{
    Constructor(){}
displayToDo =function () {
    todo_list_element.innerHTML = "";
    document.querySelector("#todo-text").value = "";
    todo_list.forEach((item) => {
      const list_element = document.createElement("li");
      list_element.innerHTML = item.todoText;
      const debtn = document.createElement("i");
      debtn.setAttribute("class", "far fa-trash-alt");
  
      debtn.setAttribute("data-id", item.id);
  
      if (item.isDone) {
        list_element.setAttribute("class", "checked");
  
        
      }
      list_element.setAttribute("data_id", item.id);
      list_element.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data_id");
        object.doneToDo(selectedId);
        debtn.addEventListener("click", function (e) {
          const debtn = e.target.getAttribute("data-id");
          obj2.deleteItem(debtn);
        });
      });
      todo_list_element.appendChild(list_element);
      list_element.appendChild(debtn);
      
  
  
    });}}
class AddToDo extends Display {
    Constructor(){}
 addToDo=function() {
  const todoText = document.querySelector("#todo-text").value; 
  if (todoText == "") {
    return;
  } else { 
    const todoObject = {
      id: todo_list.length + 1,
      todoText: todoText,
      isDone: false,
    };
    todo_list.unshift(todoObject);
    this.displayToDo();//accessing displayToDofunction which is parent class using this 
  }
};
}
let obj=new AddToDo()//creating object for addToDo class



document.querySelector("#todo-text").addEventListener("keydown", function(e) {
  if (e.keyCode == 13 && e.shiftKey ) {
    obj.addToDo()
  }
});


class Delete extends Display{//created class Delete which extends Display
    Constructor(){}
        deleteItem=function (debtn) {
    const deleteIndex = todo_list.findIndex((item) => item.id == debtn);
    todo_list.splice(deleteIndex, 1);
      this.displayToDo();} 
  }
  let obj2=new Delete()
  class DoneToDo extends Display{
      Constructor(){}
        doneToDo=function (selectedId) {
  const selectedIdIndex = todo_list.findIndex((item) => item.id == selectedId);
  if(selectedIdIndex == -1){
    return;
  }else{
  todo_list[selectedIdIndex].isDone
    ? (todo_list[selectedIdIndex].isDone = false)
    : (todo_list[selectedIdIndex].isDone = true);
  if(todo_list[selectedIdIndex].isDone==true){

  }
  this.displayToDo();}
}}
let object=new DoneToDo()
