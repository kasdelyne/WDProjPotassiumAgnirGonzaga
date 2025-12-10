        const themeToggle = document.getElementById('themeToggle');
        const themeLabel = document.getElementById('themeLabel');
        const soundToggle = document.getElementById('soundToggle');
        const timerDisplay = document.getElementById('timerDisplay');
        const decreaseTimer = document.getElementById('decreaseTimer');
        const increaseTimer = document.getElementById('increaseTimer');
        const resetBtn = document.getElementById('resetBtn');

        function saveSetting(key, value){
            localStorage.setItem(key, value);
        }

        function loadSettings(){
            const theme = localStorage.getItem('theme');
            const timer = localStorage.getItem('timer');

            if (theme === 'light'){
                themeToggle.checked = false;
                document.body.className = 'light';
                themeLabel.textContent = 'Light';
            }

            else{
                themeToggle.checked = true;
                document.body.className = 'dark';
                themeLabel.textContent = 'Dark';
                saveSetting('theme', 'dark');
            }

            if(timer) timerDisplay.textContent = timer;
        }
        
        themeToggle.addEventListener('change', () =>{
            if(themeToggle.checked){
                document.body.className='dark';
                themeLabel.textContent = 'Dark';
                saveSetting('theme', 'dark');
            }

            else{
                document.body.className='light';
                themeLabel.textContent = 'Light';
                saveSetting('theme', 'light');
            }
        });

        increaseTimer.addEventListener('click', () => {
            let time=parseInt(timerDisplay.textContent);
            timerDisplay.textContent= ++time;
            saveSetting('timer', time);
        });

        decreaseTimer.addEventListener('click', () => {
            let time = parseInt(timerDisplay.textContent);
            if(time>1){
                timerDisplay.textContent= --time;
                saveSetting('timer', time);
            }
        });
        
        resetBtn.addEventListener('click', () =>{
            localStorage.clear();
            loadSettings();
        });


        let countdownInterval;

        function startCountdown(){
            let mins = parseInt(timerDisplay.textContent);
            let timeLeft = mins * 60;

            clearInterval(countdownInterval);

            countdownInterval = setInterval(() => {
                let minutes = Math.floor(timeLeft/60);
                let secs = timeLeft%60;

                timerDisplay.textContent = `${minutes}:${
                secs.toString().padStart(2, '0')
                }`;

                timeLeft--;

                if(timeLeft<0){
                    clearInterval(countdownInterval);
                    timerDisplay.textContent = "Done !";
                }
            },1000);
        }

        const startTimer = document.getElementById("startTimer");
        startTimer.addEventListener("click", startCountdown);
        loadSettings();
