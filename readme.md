INTEGRITY, EXCELLENCE, SERVICE
> AGNIR, Kacey Adelyne &
> GONZAGA, Germione Naj

**Website Title & Browser Tab Title:**
Taskonaut :O

**Brief Description of the Website:**
A productivity and note-taking app for Pisay scholars. It is designed to make your academic experience organized and clean throughout the School Year.

**Logo Design Concept:**
Will have an astronaut that looks like it's "floating" in the air while reading a book with some other school supplies surrounding it!

# Website Outline:
This is the vision for our project: [DA VISION: Design of the Project](https://www.canva.com/design/DAG23alL040/XPYQeaERsiuzZ8fUottObQ/edit)

## Welcome Page (1 Webpage)
* Design will have twinkling stars as its background.
* Includes a link for **About Website and the Creators**.
* User will have to input their **nickname** to continue. If left blank, the 'Proceed' button will seemingly **run away** whihc prevents the user from clicking it until they have filled up the required information. This portion will require JavaScript.

CSS Code
```
<style>
    input {
        width: 220px;
        padding: 10px;
        margin: 10px;
        border: none;
        border-radius: 8px;
        font-size: 1em;
        outline: none;
    }

    .button-container {
        position: relative;
        height: 70px; / Space for the button to move */
        margin-top: 10px;
    }

    button {
        padding: 10px 30px;
        border: none;
        border-radius: 8px;
        background-color: #6a4ba3;
        color: white;
        font-size: 1em;
        cursor: pointer;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: background-color 0.3s ease;
    }
button:hover {
        background-color: #8a6bcf;
    }
</style>
```

JavaScript code
```
<script>
    const numStars = 60;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(star);
    }

    // Button runaway behavior (below inputs only)
    const btn = document.getElementById('loginBtn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const buttonContainer = document.querySelector('.button-container');

    btn.addEventListener('mouseover', () => {
        if (username.value.trim() === '' || password.value.trim() === '') {
            const containerRect = buttonContainer.getBoundingClientRect();
            const btnWidth = btn.offsetWidth;
            const btnHeight = btn.offsetHeight;

            // Move only within the button container area
            const x = Math.random() * (containerRect.width - btnWidth);
            const y = Math.random() * (containerRect.height - btnHeight);

            btn.style.left = ${x}px;
            btn.style.top = ${y}px;
            btn.style.transform = 'none';
        }
    });
btn.addEventListener('click', () => {
        if (username.value.trim() && password.value.trim()) {
            alert(Welcome, ${username.value}!);
        }
    });
</script>
```

## About the Website and Developers ! (1 Webpage)
* Will purely be made of **CSS and HTML**. It will contain the **description of the app** and at the bottom, an **"About Us!"** portion. Something fun we would like to incorporate is that when the cursor hovers on those elements, it will expand horizontally and display additional information (e.g. contact info, school, etc.)!

HTML + CSS
```
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        background: ' ';
        color: #ffeab3;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    header {
        text-align: center;
        padding: 60px 20px;
    }

    header h1 {
        font-size: 3em;
        color: #ffeab3;
    }

    header p {
        font-size: 1.2em;
        margin-top: 15px;
        color: #ffeab3;
        max-width: 600px;
    }

    .about-section {
        margin-top: 60px;
        width: 90%;
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 60px;
    }

    .about-title {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        color: #ffeab3;
        margin-bottom: 30px;
    }

    .card-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }

    .about-card {
        background: white;
        border-radius: 10px;
        transition: all 0.4s ease;
        width: 250px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.1em;
        font-weight: 500;
        box-shadow: 0 4px 8px rgba(230, 121, 121, 0.96);
        cursor: pointer;
        overflow: hidden;
    }

    .about-card:hover {
        width: 350px;
        background: #f8f9fa;
    }

    .extra {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.4s ease;
        font-size: 0.95em;
        color: #ffeab3;
        margin-top: 10px;
    }

    .about-card:hover .extra {
        max-height: 200px;
        opacity: 1;
    }

    @media (max-width: 600px) {
        .about-card {
            width: 100%;
        }
        .about-card:hover {
            width: 100%;
        }
    }
</style>
</head>
<body>
<h1> what's taskonaut about?!</h1>
<p>A productivity and note-taking app for Pisay scholars. It is designed to make your academic experience organized and clean throughout the School Year.</p>

<section class="about-section">
    <div class="about-title> About the Developers </div>

    <div class="card-container">
    <div class="about-card">
        <span> Kas Agnir </span>
        <div class="extra">
            Name: AGNIR, Kacey Adelyne O.
            Class No.: K02
            School: Philippine Science High School
            Email: b2029kaoagnir@pshs.edu.ph
        </div>
    </div>

    <div class="about-card">
        <span> Naj Gonzaga </span>
        <div class="extra">
            Name: GONZAGA, Germione Naj
            Class No.: K15
            School: Philippine Science High School
            Email: b2029gnggonzaga@pshs.edu.ph
        </div>
    </div>
    </div>
</section>
</body>
```

## Main Page (1 Webpage)
* Will be divided into three columns.
* Similar background to the 'Welcome Page', along with the twinkling stars wherein JavaScript will be applied.
* (Optional) We might change the cursor ui!
### Left Side
* Will contain a to-do list and a progress bar. The progress bar will contain JavaScript.

JavaScript code
```
let progress=0;

function upProgress(){
    if (progress < 100 ){
        progress+=10;
        document.getElementbyId('progress-bar').style.width=progress+"%";
    }
}
```


### Middle Side
* Will contain an **expandable whiteboard** which will be done by using another JavaScript code.
* Below the whiteboard will be a **calendar** where you can add your tasks and track those deadlines that you do NOT want to miss. If time permits, we would like to add a **color-coding** to determine if that task is a test, requirement, homework, AA, etc. which will require JavaScript.

### Right Side
* Will contain an spotify playlists for each genre the user chooses. JavaScript will be used for this portion of the website.

## Navigation Bar + Others (Contains 4 Webpages)
* Dashboard - Will redirect you to the **main page.**

* Calendar - Will lead you to a **more expanded version** of your calendar.

* Active Recall - Allows the user to be redirected into a webpage to input **questions/answers** in the cards and will **quiz** them on it. It will somewhat follow the format of this website: https://activerecall.com/.

* Calculator - Once clicked, it will redirect you to a **scientific calculator webpage** so the user can input their values and calculate them easily. JavaScript will be incorporated in here

* Games - Includes **minigames** so the user can play a few games while resting. These two minigames are the **Dress-Up Game** which allows you to dress up Pompompurin :D (everything there will be handdrawn) and **Coffee-Maker Game** where you combine different substances to form a delicious, heavenly, strong drink--perfect if you're craving for coffee but do not know what to order! JavaScript will be used in both minigames.

## Settings (Has 1 Webpage)
* Will have a moving background similar to Naj's Bonus task.
* Will contain the following: Theme Toggle, Sound, Study Timer, Reset All
* All of these will require JavaScript to do.

# References
* Code Instinct. (2022, June 13). Glowing Text Animation using HTML and CSS   TUTORIAL [Video]. YouTube. https://www.youtube.com/watch?v=2xq5tQwQ0fU
* Coding2GO. (2024, July 22). Learn CSS border animations in 6 * minutes [Video]. YouTube. https://www.youtube.com/watch?v=ezP4kbOvs_E
* CSSnippets. (2024, October 22). 🔥 Create stunning CSS Border animations in 5 minutes! [Part 1] [Video]. YouTube. https://www.youtube.com/watch?v=XeOtvhjjHWY
* Online Tutorials. (2020, July 10). CSS Glowing Text Hover Effects | Quick HTML CSS tutorial for Beginner [Video]. YouTube. https://www.youtube.com/watch?v=I_RhD99rR0c
* TikTok - Make your day. (n.d.). https://vt.tiktok.com/ZSyeq1U7m/
* TikTok - Make your day. (n.d.-b). https://vt.tiktok.com/ZSyeqF9dS/
* TikTok - Make your day. (n.d.-c). https://vt.tiktok.com/ZSyeVofaA/

-----

# Q3 Project Update
INTEGRITY, EXCELLENCE, SERVICE
> AGNIR, Kacey Adelyne &
> GONZAGA, Germione Naj

## Final Title
Taskonaut

## Overview
A productivity and note-taking application designed specifically for Pisay scholars. The website aims to ensure students stay organized, manage academics efficiently, and maintain a clean, distraction-free workspace throughout the school year.

## Features
* The website is designed to work on both phones and laptops.
* Users can set deadlines, plan academic events, and track tasks by using interactive tools such as calendars and to-do lists.
* Background music will automatically play on each website which sets the vibe/mood for the user.

## Details
**[ALL]** 
* Remove the "alert()" popups in JavaScript and use the **dialogue demo**.
* Add background music playback across all pages to ensure a consistent atmosphere for learning.

**[WELCOME PAGE]**
* Make sure the runaway "Proceed" button functions correctly when the required fields are left empty.
* Apply the **container queries** to the log-in area for better responsiveness.
* Adjust the logo to make it bigger to make it more visually appealing.

**[DASHBOARD/MAIN PAGE]**
* Need to add the actual name the user places instead of a placeholder such as "username".

**[ACTIVE RECALL]**
* Fix the device responsiveness of the Flashcards Tab.
* Adjust the CSS so everything is in the middle.

**[CALENDAR]** 
* Can add more events/tasks instead of just one.

## Updates
**[SETTINGS]: Will be removed due to inability of adding the changes into other websites.**

**[STUDY TIMER]**
* Will apply study timer + its total hours of use weekly + total in seconds, minutes, and hours.

## Proposed Webpages
**[PAGE1]**
* Will have a personalization form, theme preview panel, and a short introduction to what its purpose is, which allows users to configure their study environment before entering.

**[PAGE2]**
* Will be a study planner area where you can plan things, set timeline and priorities, etc.
* Includes the study Timer below when you scroll down.

**[PAGE3]**
* Is a study insight page where users can track their productivity patterns.
* It shows the study time breakdown.
* Will then show simple productivity feedback messages.
* Will also contain the option to reset/edit the users' preferences.

## Design of the Added Webpages
Link: https://www.canva.com/design/DAG96xyvJU8/iWeRaZvK7GQHxUE4BRTaYg/edit?utm_content=DAG96xyvJU8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Definition of Done

Once we accomplish the following details that we want to fix and debug the JavaScript and CSS to make it look cleaner and improve functionality, readability, and overall user experience. The design for all webpages are polished and consistent, and the responsiveness is verified on all devices. We will also gather feedback on our project by asking fellow classmates, friends, etc. to test the website. Once the criticism is reviewed, we will incorporate/add it to enhance the project.

# FINAL MODIFICATION PROPOSAL
* All data shall be stored inside of localStorage in JSON format

## Updated Wireframes:
**Log-In/Sign-Up**
* Small fixes: duplicate loginBtn.onclick(), so one overrides the other
* Lacks update/delete user account. Using CRUD, users can change their username/password or delete their account.
```
loginBtn.onclick = () => {
const username = document.getElementById("loginUser").value;
const password = document.getElementById("loginPass").value;

const storedUser = localStorage.getItem("username");
const storedPass = localStorage.getItem("password");

if(username === storedUser && password === storedPass){
window.location.href = "/public.(3) dashboard.html";
}
}
```

