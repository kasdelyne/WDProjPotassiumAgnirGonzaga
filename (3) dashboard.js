            // Navigation Bar
            
            function toggleNavBar(){ // the function that opens or closes the navigation bar
                document.getElementById('navbar').classList.toggle('open');
            }
            

            function saveTasks() {
                const tasks = [];
                document.querySelectorAll("#todo-list li").forEach(li => {
                    const text = li.querySelector("span").textContent.trim();
                    const done = li.querySelector("input[type='checkbox']").checked;
                    tasks.push({ text, done });
                });
                localStorage.setItem("todoTasks", JSON.stringify(tasks));
            }

            function loadTasks() {
                const tasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
                tasks.forEach(task => {
                    const li = document.createElement("li");

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.checked = task.done;
                    checkbox.onchange = () => { 
                                updateP(); 
                                saveTasks(); 
                    };

                            const span = document.createElement("span");
                            span.textContent = " " + task.text;

                            const editBtn = document.createElement("button");
                            editBtn.textContent = "Edit";

                            editBtn.onclick = () => {
                                        const newText = prompt("Edit task:", span.textContent.trim());
                                        if(newText){
                                                    span.textContent = " " + newText;
                                                    saveTasks();
                                        }
                            };

                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "X";
                    deleteButton.onclick = () => { 
                                li.remove(); 
                                updateP(); 
                                saveTasks(); 
                    };

                    li.appendChild(checkbox);
                    li.appendChild(span);
                    li.appendChild(editBtn);
                    li.appendChild(deleteButton);

                    document.getElementById("todo-list").appendChild(li);
                });
                updateP();
            }


            loadTasks();
                        // Progress Bar
            let progress=0;

            function moreProgress(){
                if (progress<100){  // stores the values from 0 to 100%
                    progress+=10; // increases by 10% each time the button is pressed
                    document.getElementById("progress-bar").style.width=progress+'%'; // updates the width of the progress bar
                }
            }

            // Adds a Task

            function updateP(){ // recalculates the progress based on the completed tasks
                const tasks = document.querySelectorAll("#todo-list input[type='checkbox']"); // grabs all the checkboxes
                const checked = document.querySelectorAll("#todo-list input[type='checkbox']:checked"); // grabs all the CHECKED checkboxes
                const percent = tasks.length === 0 ? 0 : (checked.length / tasks.length) * 100; // calculates the percentages of the task completed
                // if there are no tasks (tasks.length === 0), set percent to 0 to avoid division by 0. Otherwise, it will divide the number of tasks and multiply by 100 to get a percentage
                document.getElementById("progress-bar").style.width = percent + '%';
            }

            function addTask(){ // adds a new task to the list
                const input=document.getElementById("taskInput");
                const taskText=input.value.trim(); // trims whitespace. ensures that " " is treated as empty
                
                if (taskText == ""){ // checks of user has entered nothing
                    alert("please enter a task !"); // if the task remains empty, there will be an alert that tells the user to enter a task
                    return;
                }

                const li=document.createElement("li");

                const checkbox=document.createElement("input");
                checkbox.type="checkbox";
                checkbox.onchange= () => {
                            updateP();
                            saveTasks();
                }; // event handler so that when the checkbox is checked/unchecked, updateP()is called to update the progress bar

                const span = document.createElement("span");
                span.textContent = " " + taskText;

                const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.style.marginLeft = "10px";

                editBtn.onclick = () = {
                            editBtn.textContent = prompt("Edit task:", span.textContent.trim());
                            if(newText){
                                        span.textContent = " " + newText;
                                        saveTasks();
                            }
                };
                        
                const deleteButton=document.createElement("button");
                deleteButton.textContent = "X"; // creates a delete button
                deleteButton.style.marginLeft = "10px";
                deleteButton.onclick = () => {
                    li.remove();
                    updateP();
                    saveTasks();
                }
                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(editBtn);
                li.appendChild(deleteButton);

                document.getElementById("todo-list").appendChild(li);

                input.value="";
                updateP();
                saveTasks();
            }

            // Spotify Link

            document.getElementById("genreSelect").addEventListener("change", function () {
                const genre = this.value;
                const player = document.getElementById("spotifyPlayer");


            let spotifyLink;

            switch(genre){
                case 'rnb':
                    spotifyLink="https://open.spotify.com/embed/playlist/0JQ5DAqbMKFEZPnFQSFB1T";
                    break;

                case 'asmr':
                    spotifyLink="https://open.spotify.com/embed/playlist/7pNz2JvzxfstnY8zazPklN";
                    break;
                
                case 'study':
                    spotifyLink="https://open.spotify.com/embed/playlist/2ptAZKTm6xJoZ4RsebY3Vk";
                    break;

                case 'pop':
                    spotifyLink="https://open.spotify.com/embed/album/1aqg30bNvLSWgShZgX4oop";
                    break;

                case 'kpop':
                    spotifyLink="https://open.spotify.com/embed/playlist/6Z05FMYGnZxTzxU9AZRsWA";
                    break;

                default:
                    spotifyLink="";
            }

            player.src = spotifyLink;
        });

        // Whiteboard
        const whiteboard = document.getElementById('whiteboard');

        whiteboard.value=localStorage.getItem("whiteboardContent") || "";

        whiteboard.addEventListener ("input", ()=>{
            localStorage.setItem("whiteboardContent", whiteboard.value);
        });


        // Expands the whiteboard when clicked
        whiteboard.addEventListener('focus', () => { // sets up a listener for the "focus" event which occurs when the user clicks inside the text area
            whiteboard.classList.add('expanded'); // adds the class expanded to the text area. In CSS, we designed it to make the whiteboard bigger, increasing the height
        });

        // Shrinks back down when it loses focus
        whiteboard.addEventListener('blur',() =>{ // sets up a listener for the "blur" event which occurs when the user clicks out of the whiteboard
            whiteboard.classList.remove('expanded'); // removes the expanded class so the text area returns to its original size
        });

        const username = localStorage.getItem("username");

        if (!username) {
            window.location.href = "index.html";
        } 
        else {
            document.getElementById("welcome").textContent = username;
        }

        
