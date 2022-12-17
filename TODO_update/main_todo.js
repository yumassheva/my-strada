 const STATUS = {
            TODO: "To Do",
            DONE: "Done",
}
const PRIORITY = {
            HIGH: "high",
            LOW:"low",
}
const CSSCLASSPRIORITY = {
            HIGH: "task",
            LOW:"task_low",
          }
let list = []
function Task(name,priority) {
  this.name = name;
  this.priority = priority;
  this.status = STATUS.TODO;
  let time = new Date();
  this.time_of_task = time.getHours() + ':' + time.getMinutes();
}
let input_high=document.querySelector(".input");
let input_low=document.querySelector('.input_low');

let form = document.forms.first;
let form_second = document.forms.second;

form.addEventListener('submit', function showH() {
  render(".task");
  push(input_high.value, PRIORITY.HIGH);
  show(form, PRIORITY.HIGH, CSSCLASSPRIORITY.HIGH);
})
form_second.addEventListener('submit', function showLow() {
  render(".task_low");
  push(input_low.value, PRIORITY.LOW);
  show(form_second, PRIORITY.LOW, CSSCLASSPRIORITY.LOW);
})

function render(nameClass) {
  let taski = document.querySelectorAll(nameClass);
  for (let tas of taski) {
    tas.remove();
  }
}
function push(add_task, priority) {
  list.push(new Task(add_task, priority));
}
function show(formNumber,priority,classpriority) {
  event.preventDefault();
  for (let task of list) {
    if (task.priority == priority) {
      let task_box = document.createElement("div");
      task_box.className = classpriority;
      formNumber.after(task_box);
      
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      if (task.status == STATUS.DONE) {
        checkbox.setAttribute("checked", true);
      }
      task_box.append(checkbox);

      checkbox.addEventListener("click", function () {
        task.status = STATUS.DONE;
      })
      let task_name = document.createElement('label');
      task_name.className = "label";
      task_name.textContent = task.name + " " + task.time_of_task;
      checkbox.after(task_name);

      let delete_button = document.createElement('button');
      delete_button.className = "deletetask";
      delete_button.textContent = "+";
      task_name.after(delete_button);

      delete_button.addEventListener('click', function deleteTask() {
        let task = list.filter(item => item.name !== task_name.textContent);//без мутаций. исходник по ссылке остается
        list = task;
        task_name.remove();
        delete_button.remove();
        checkbox.remove();
        task_box.remove();
      })
    }
  }
}

