//declaring constants for the input button and task list area

const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

//query selector will help javascript find the elements and modify them;

//Adding an EVENT LISTENER for the enter key
//keyup is the type of event being listened to and is triggered when the usr releases the key after typing
taskInput.addEventListener("keyup", (e) => {
if (e.key === "Enter") {
    createTask();
}
})



