    let current = new Date();

    function theCalendar() {
        let year = current.getFullYear();
        let month = current.getMonth();

        document.getElementById("monthYear").textContent =
            current.toLocaleString("default", { month: "long", year: "numeric" });

        let daysGrid = document.getElementById("daysGrid");
        daysGrid.innerHTML = "";

        let firstDay = new Date(year, month, 1).getDay();
        let lastDate = new Date(year, month + 1, 0).getDate();

        // Empty boxes before first day
        for (let i = 0; i < firstDay; i++) {
            let empty = document.createElement("div");
            daysGrid.appendChild(empty);
        }

        for (let day = 1; day <= lastDate; day++) {
            let dateKey = `${year}-${month + 1}-${day}`;
            let savedEvent = localStorage.getItem(dateKey);

            let box = document.createElement("div");
            box.className = "day";
            box.textContent = day;

            if (savedEvent) {
                let eventDiv = document.createElement("div");
                eventDiv.className = "event";

                let span = document.createElement("span");
                span.textContent = savedEvent;
                eventDiv.appendChild(span);

                let del = document.createElement("button");
                del.className = "delete-btn";
                del.textContent = "X";

                del.onclick = function (e) {
                    e.stopPropagation();
                    localStorage.removeItem(dateKey);
                    theCalendar();
                };

                eventDiv.appendChild(del);
                box.appendChild(eventDiv);
            }

            box.onclick = function () {
                let task = prompt("Add event:");
                if (task) {
                    localStorage.setItem(dateKey, task);
                    theCalendar();
                }
            };

            daysGrid.appendChild(box);
        }
    }

    document.getElementById("next").onclick = function () {
        current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
        theCalendar();
    };

    document.getElementById("prev").onclick = function () {
        current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
        theCalendar();
    };

    theCalendar();