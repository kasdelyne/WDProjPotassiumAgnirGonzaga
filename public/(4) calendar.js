let selectedDateKey = null;

const dialog = document.getElementById("eventDialog");
const eventInput = document.getElementById("eventInput");
const saveBtn = document.getElementById("saveEventBtn");

let current = new Date();

function theCalendar() {
  const year = current.getFullYear();
  const month = current.getMonth();

  document.getElementById("monthYear").textContent =
    current.toLocaleString("default", { month: "long", year: "numeric" });

  const daysGrid = document.getElementById("daysGrid");
  daysGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();


  for (let i = 0; i < firstDay; i++) {
    daysGrid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateKey = `${year}-${month + 1}-${day}`;

    const box = document.createElement("div");
    box.className = "day";
    box.textContent = day;


    const stored = localStorage.getItem(dateKey);
    let events = [];

    if (stored) {
      try {
        events = JSON.parse(stored);
      } catch {
        events = [stored];
      }
    }


    events.forEach((eventText, index) => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";

      const span = document.createElement("span");
      span.textContent = eventText;

      const del = document.createElement("button");
      del.className = "delete-btn";
      del.textContent = "X";
      
      del.onclick = (e) => {
        e.stopPropagation();
        events.splice(index, 1);
        localStorage.setItem(dateKey, JSON.stringify(events));
        theCalendar();
      };
      
      const editBtn = document.createElement("button");
      editBtn.className = "delete-btn";
      editBtn.textContent = "✎";

      editBtn.onclick = (e) => {
        e.stopPropagation();

        const newText = prompt("Edit event:", eventText);

        if(newText !== null && newText.trim() !== ""){
          events[index] = newText.trim();
          localStorage.setItem(dateKey,JSON.stringify(events));
          theCalendar();
        }
      }      

      eventDiv.append(span, editBtn, del);
      box.appendChild(eventDiv);
    });

   
    box.onclick = (e) => {
      if (e.target.classList.contains("delete-btn")) return;
      selectedDateKey = dateKey;
      eventInput.value = "";
      dialog.showModal();
    };

    daysGrid.appendChild(box);
  }
}


saveBtn.onclick = () => {
  const task = eventInput.value.trim();
  if (!task || !selectedDateKey) return;

  const stored = localStorage.getItem(selectedDateKey);
  let events = [];

  if (stored) {
    try {
      events = JSON.parse(stored);
    } catch {
      events = [stored];
    }
  }

  events.push(task);
  localStorage.setItem(selectedDateKey, JSON.stringify(events));

  dialog.close();
  eventInput.value = "";
  theCalendar();
};


document.getElementById("next").onclick = () => {
  current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
  theCalendar();
};

document.getElementById("prev").onclick = () => {
  current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
  theCalendar();
};


function toggleNavBar() {
  document.getElementById("navbar").classList.toggle("open");
}


theCalendar();
