            function toggleNavBar(){
                document.getElementById('navbar').classList.toggle('open');
            }

            /* Progress Bar */
            let progress=0;

            function moreProgress(){
                if (progress<100){
                    progress+=10;
                    document.getElementById("prgress-bar").style.width=progress+'%';
                }
            }

            function addTask(){
                const input=document.getElementById("taskInput");
                const taskText=input.value.trim();
                
                if (taskText == " "){
                    alert("please enter a task !");
                    return;
                }

                const li=document.createElement("li");

                const checkbox=document.createElement("input");
                checkbox.type="checkbox";

                const deleteButton=document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.style.marginLeft = "10px";
                deleteButton.onclick = () => li.remove();

                li.appendChild(checkbox);
                li.append(" " + taskText);
                li.appendChild(deleteButton);

                document.getElementById("todo-list").appendChild(li);

                input.value="";
            }

            /* Spootify*/
            document.getElementById('genreSelect').addEventListener('change', function(){
                const genre = this.value;
                const plater = document.getElementById('spotify-embed');
                
                /* choose playlist link*/
            })