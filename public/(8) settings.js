
        const themeToggle = document.getElementById('themeToggle'); //  theme toggle switch
        const themeLabel = document.getElementById('themeLabel'); // theme label that displays the current theme
        const soundToggle = document.getElementById('soundToggle'); // sound toggle switch (will be applied once log-in and save options are learned)
        const timerDisplay = document.getElementById('timerDisplay'); // timer display element
        
        // timer control buttons
        const decreaseTimer = document.getElementById('decreaseTimer');
        const increaseTimer = document.getElementById('increaseTimer');

        // reset button
        const resetBtn = document.getElementById('resetBtn');

        function saveSetting(key, value){ // saves a setting to localStorage
            localStorage.setItem(key, value);
        }

    // Theme Toggle
        function loadSettings(){ // loads theme and timer
            const theme = localStorage.getItem('theme');
            const timer = localStorage.getItem('timer');

            if (theme === 'light'){ //apply saved theme
                themeToggle.checked = false; // turns off toggle switch
                document.body.className = 'light'; //applies light theme to the page
                themeLabel.textContent = 'Light'; //changes the label text to light
            }

            else{
                themeToggle.checked = true; // turns on toggle switch
                document.body.className = 'dark'; // applies dark theme to the page
                themeLabel.textContent = 'Dark'; // changes label text to dark
                saveSetting('theme', 'dark'); // dark mode is the default theme
            }

            if(timer) {
                timerDisplay.textContent = timer; // apply saved timer value if it exists
            }
        }
        
        themeToggle.addEventListener('change', () =>{ // switch between dark and light mode
            if(themeToggle.checked){ // if theme toggle is on
                document.body.className='dark'; // apply dark mode
                themeLabel.textContent = 'Dark'; // update label text
                saveSetting('theme', 'dark'); // save dark mode to local storage
            }

            else{
                document.body.className='light'; // apply light mode
                themeLabel.textContent = 'Light'; // update label text
                saveSetting('theme', 'light'); // save light mode to local storage
            }
        });

        // Increase Timer Button
        increaseTimer.addEventListener('click', () => { // runs when increase button is clicked
            let time=parseInt(timerDisplay.textContent); // converts the displayed timer into a number
            timerDisplay.textContent= ++time; // adds one minute to the timer
            saveSetting('timer', time); // saves the updated timer value
        });

        // Decrease Timer Button
        decreaseTimer.addEventListener('click', () => { // runs when the decrease button is clicked
            let time = parseInt(timerDisplay.textContent); // converts the displayed timer into a number
            if(time>1){ // prevents the timer from going below 1 minute
                timerDisplay.textContent= --time; // subtracts one minute in the time
                saveSetting('timer', time); // saves the updated timer value
            }
        });
        
        // Reset Button
        resetBtn.addEventListener('click', () =>{ // runs when the reset button is clicked
            localStorage.clear(); // resets everything
            loadSettings(); // saves the setting to the local storage
        });


        // Countdown 
        let countdownInterval;


        // Stards the Countdown Interval
        function startCountdown(){
            let mins = parseInt(timerDisplay.textContent); // converts the displayed minutes into a number
            let timeLeft = mins * 60; // multiplies the minutes to 60 to convert it into seconds

            clearInterval(countdownInterval); // clears any previous timer running

            countdownInterval = setInterval(() => { // starts a new countdown every second
                let minutes = Math.floor(timeLeft/60);
                let secs = timeLeft%60;

                timerDisplay.textContent = `${minutes}:${ // displays the timer in the minutes and seconds format
                secs.toString().padStart(2, '0')
                }`;

                timeLeft--; // time decreases by one second

                if(timeLeft<0){ // stops the timer when it reaches 0
                    clearInterval(countdownInterval);
                    timerDisplay.textContent = "Done !"; 
                }
            },1000);
        }

        const startTimer = document.getElementById("startTimer"); // starts the timer when the button is clicked
        startTimer.addEventListener("click", startCountdown);
        loadSettings();

        function toggleNavBar(){ // opens and closes the nav bar
            const nav=document.getElementById("navbar");
            nav.classList.toggle("open");
        }