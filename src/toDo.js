function toDo($){

form.onsubmit = function(){
    event.preventDefault();
    if(!form.elements.task.value) return;
    var listItem = document.createElement("tr");
    listItem.innerHTML = "<td>" + form.elements.task.value + "</td><td name='endTime'>" + form.elements.endTime.value + "</td><td><a href=' ' id='delButton'>x</a></td>";
    $("#todo-list").append(listItem);
    $("#delButton").click(function(event){
        event.preventDefault();
        this.parentElement.parentElement.remove()
    })
    form.elements.task.value = "";
    alert(typeof form.elements.endTime.value)
}   
}

export {toDo};