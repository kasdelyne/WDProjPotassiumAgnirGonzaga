            function toggleNavBar(){
                document.getElementById('navbar').classList.toggle('open');
            }

            /* Progress Bar */
            let progress=0;

            function moreProgress(){
                if (progress<100){
                    progress+=10;
                    document.getElementById("progress-bar").style.width=progress+'%';
                }
            }

            /* Add Task*/

            function updateP(){
                const tasks = document.querySelectorAll("#todo-list input[type='checkbox']");
                const checked = document.querySelectorAll("#todo-list input[type='checkbox']:checked");

                const percent = tasks.length === 0 ? 0 : (checked.length / tasks.length) * 100;

                document.getElementById("progress-bar").style.width = percent + '%';
            }

            function addTask(){
                const input=document.getElementById("taskInput");
                const taskText=input.value.trim();
                
                if (taskText == ""){
                    alert("please enter a task !");
                    return;
                }

                const li=document.createElement("li");

                const checkbox=document.createElement("input");
                checkbox.type="checkbox";
                checkbox.onchange=updateP;

                const deleteButton=document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.style.marginLeft = "10px";
                deleteButton.onclick = () => {
                    li.remove();
                    updateP();
                }
                li.appendChild(checkbox);
                li.append(" " + taskText);
                li.appendChild(deleteButton);

                document.getElementById("todo-list").appendChild(li);

                input.value="";
                updateP();
            }

            document.getElementById("genreSelect").addEventListener("change", function () {
            const genre = this.value;
            const player = document.getElementById("spotifyPlayer");

            let spotifyLink;

            switch(genre){
                case 'rnb':
                    spotifyLink="https://open.spotify.com/embed/genre/0JQ5DAqbMKFEZPnFQSFB1T";
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