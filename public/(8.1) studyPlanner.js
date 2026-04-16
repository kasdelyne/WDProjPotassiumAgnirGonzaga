function savePlannerData() {
  const subjects = Array.from(document.querySelectorAll('.sidebar div:first-child input')).map(i => i.value);
  const goals = document.querySelector('.sidebar div:nth-child(2) input').value;

  const data = JSON.parse(localStorage.getItem('productivitySetup')) || {};
  data.subjects = subjects.map(s => ({ name: s, hours: 0 }));
  data.goals = goals;

  localStorage.setItem('productivitySetup', JSON.stringify(data));
}

function savePlannerTasks(){
  const rows = document.querySelectorAll("#taskTable tbody tr");
    const tasks = [];

    rows.forEach(row => {
        const task = row.cells[0].querySelector("input").value;
        const date = row.cells[1].querySelector("input").value;
        const priority = row.cells[2].querySelector("select").value;

        tasks.push({
        task,
        date,
        priority
        });
});
    localStorage.setItem("plannerTasks", JSON.stringify(tasks));
}

function loadPlannerTasks(){
  const saved = JSON.parse(localStorage.getItem("plannerTasks")) || [];
  const table = document.querySelector("#taskTable tbody");

  table.innerHTMl = "";

  saved.forEach(t => {
    constconst priorityCell = row.insertCell(2);
    const select = document.createElement("select");
    select.className = "priority";

    ["Low","Medium","High"].forEach(opt => {
        const option = document.createElement("option");
        option.textContent = opt;
        if(opt === t.priority) option.selected = true;
        select.appendChild(option);
      row = table.insertRow();

    row.insertCell(0).innerHTML = `<input type="text" value = "${t.task}">`;
    row.insertCell(1).innerHTML = `<input type="date" value = "${t.date}">`;

    
  };
}

function calculateWeek() {
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const weekDisplay = document.getElementById("weekDisplay");

  if (start && end) {
    const startDate = new Date(start);
    const day = startDate.getDate();
    const weekNum = Math.ceil(day / 7);
    const monthName = startDate.toLocaleString('default', { month: 'long' });
    weekDisplay.value = `Week ${weekNum} of ${monthName}`;
  }
}

document.getElementById("startDate").addEventListener("change", calculateWeek);
document.getElementById("endDate").addEventListener("change", calculateWeek);

function addRow() {
  const table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
  const row = table.insertRow();

  const taskCell = row.insertCell(0);
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.placeholder = "New Task";
  taskCell.appendChild(taskInput);


  const dateCell = row.insertCell(1);
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateCell.appendChild(dateInput);


  const priorityCell = row.insertCell(2);
  const select = document.createElement("select");
  select.className = "priority";
  const options = ["Low", "Medium", "High"];
  options.forEach(opt => {
    const option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });
  priorityCell.appendChild(select);

 const actionCell = row.insertCell(3);
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => row.remove();
  actionCell.appendChild(completeBtn);
}

function addEntry(event) {
  const container = event.target.closest('div');
  const input = container.querySelector('input');
  if (input.value.trim() === "") return;

  let list = container.querySelector("ul");
  if (!list) {
    list = document.createElement("ul");
    list.style.marginTop = "0.5rem";
    container.appendChild(list);
  }

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
}
document.querySelectorAll(".sidebar button").forEach(btn => {
  btn.addEventListener("click", addEntry);
});

let timer;
let totalSeconds = 0;
let running = false;

function updateDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("mainTimer").textContent =
    `${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:` +
    `${seconds.toString().padStart(2, '0')}`;

  document.getElementById("hr").textContent = hours.toString().padStart(2, '0');
  document.getElementById("min").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("sec").textContent = seconds.toString().padStart(2, '0');
}



let sessionSeconds = 50 * 60; 
let breakSeconds = 10 * 60;   
let onBreak = false;

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      totalSeconds++;
      updateDisplay();

      if (!onBreak && totalSeconds >= sessionSeconds) {
        alert("Time for a break!");
        totalSeconds = 0;
        onBreak = true;
      } else if (onBreak && totalSeconds >= breakSeconds) {
        alert("Break over! Back to work.");
        totalSeconds = 0;
        onBreak = false;
      }

    }, 1000);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  totalSeconds = 0;
  updateDisplay();
}

updateDisplay();


window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem('productivitySetup'));
  if (!savedData) return;

  if(savedData.week){
    document.getElementById('startDate').value = savedData.week;
    calculateWeek();
  }

  const sidebarFocus = document.querySelector('.sidebar div:first-child .entry-group input');
  const focusContainer = document.querySelector('.sidebar div:first-child');
  
  if (savedData.subjects && savedData.subjects.length > 0) {
    sidebarFocus.value = savedData.subjects[0].name || '';
    for (let i = 1; i < savedData.subjects.length; i++) {
      const div = document.createElement('div');
      div.classList.add('entry-group');
      div.innerHTML = `<input type="text" placeholder="Subject" value="${savedData.subjects[i].name || ''}"><button>+</button>`;
      focusContainer.appendChild(div);
    }
  }

  const sidebarGoals = document.querySelector('.sidebar div:nth-child(2) entry-group input');
  sidebarGoals.value=savedData.goals || '';

  if(savedData.sessionLength) sessionSeconds = savedData.sessionLength * 60;
  if(savedData.breakLength) breakSeconds = savedData.breakLength * 60;
});

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
