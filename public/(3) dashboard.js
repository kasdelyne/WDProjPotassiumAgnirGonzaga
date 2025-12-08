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

            /* Spootify*/
            document.getElementById('genreSelect').addEventListener('change', function(){
                const genre = this.value;
                const plater = document.getElementById('spotify-embed');
                
                /* choose playlist link*/
            })