
            let current = new Date();

            function theCalendar(){
                let year = current.getFullYear();
                let month = current.getMonth();

                let monthYear = document.getElementById("monthYear");
                monthYear.textContent = current.toLocaleString('default',{
                    month: 'long',
                    year:'numeric'
                });

                let daysGrid = document.getElementById("daysGrid");
                daysGrid.innerHTML = "";

                let firstDay = new Date(year, month, 1).getDay();
                let lastDate = new Date(year, month +1, 0).getDate();


                for(let i=0; i<firstDay; i++){
                    let emptyBox = document.createElement("div");
                    daysGrid.appendChild(emptyBox);
                }

                for (let day = 1; day <= lastDate; day++) {
                    let dateKey = year + "-" + (month + 1) + "-" + day;
                    let event = localStorage.getItem(dateKey);

                    let dayBox = document.createElement("div");
                    dayBox.className = "day";
                    dayBox.textContent = day;

                    if (event) {
                        let save = document.createElement("div");
                        save.className = "event";

                        let textSpan = document.createElement("span");
                        textSpan.textContent = event;
                        save.appendChild(textSpan);

                        let deleteBtn = document.createElement("button");
                        deleteBtn.textContent = "X";
                        deleteBtn.className = "delete-btn";

                        deleteBtn.onclick = function (e) {
                            e.stopPropagation();                
                            localStorage.removeItem(dateKey);   
                            theCalendar();                     
                        };

                        save.appendChild(deleteBtn);
                        dayBox.appendChild(save);
                    }

                    dayBox.onclick = function () {
                        let task = prompt("Add event:");
                        if (task) {
                            localStorage.setItem(dateKey, task);
                            theCalendar();
                        }
                    };

                    daysGrid.appendChild(dayBox);
                }

        function nextMonth(){
                current = new Date(current.getFullYear(), current.getMonth() +1, 1);
                theCalendar();
            }

        function prevMonth(){
                current = new Date(current.getFullYear(), current.getMonth()-1, 1);
                theCalendar();
            }

        theCalendar();
        document.getElementById("next").onclick = nextMonth;
        document.getElementById("prev").onclick = prevMonth;
            }