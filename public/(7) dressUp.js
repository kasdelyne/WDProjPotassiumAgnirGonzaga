        // categories and options
        const items = {
            hair: ["/WDProjPotassiumAgnirGonzaga/assets/hair1.png", "/WDProjPotassiumAgnirGonzaga/assets/hair2.png", "/WDProjPotassiumAgnirGonzaga/assets/hair3.png"],
            dress: ["/WDProjPotassiumAgnirGonzaga/assets/dress.png"],
            shirt: ["/WDProjPotassiumAgnirGonzaga/assets/shirt1.png", "/WDProjPotassiumAgnirGonzaga/assets/shirt2.png"],
            pants: ["/WDProjPotassiumAgnirGonzaga/assets/pants1.png", "/WDProjPotassiumAgnirGonzaga/assets/pants2.png"],
            accessory: ["/WDProjPotassiumAgnirGonzaga/assets/accessory1.png", "/WDProjPotassiumAgnirGonzaga/assets/accessory2.png"]
        };

        const categories = Object.keys(items); // extract category names into arrays
        let currentCategoryIndex = 0; // keep track of which category is currently selected

        // html elements
        const categoryLabel = document.getElementById("categoryLabel"); // label that shows the current category name
        const circles = [ 
            document.getElementById("opt1"), // option 1
            document.getElementById("opt2"), // option 2
            document.getElementById("opt3")  // option 3
        ];

        // update circles for current category
        function loadCategory() {
            const category = categories[currentCategoryIndex]; // gete current category name
            const list = items[category]; // get the array of images from that category

            categoryLabel.textContent = category.charAt(0).toUpperCase() + category.slice(1); // display category name with first letter captitalized

            circles.forEach((circle, i) => { // loop through 3 option circles
                circle.innerHTML = ""; // clear any existing content inside the circle

                if (list[i]) { // if theres an image in this option
                    let img = document.createElement("img");
                    img.src = list[i]; 
                    circle.appendChild(img); // add image to circle

                    circle.onclick = () => { // when circle is clicked
                        document.getElementById(category).src = list[i];
                    }; // set image
                } else {
                    circle.onclick = null; // no image = remove click handler
                }
            });
        }

        // arrows
        document.getElementById("prevBtn").onclick = () => {
            currentCategoryIndex =
                (currentCategoryIndex - 1 + categories.length) % categories.length;
            loadCategory(); // update circles for new category
        };

        document.getElementById("nextBtn").onclick = () => {
            currentCategoryIndex =
                (currentCategoryIndex + 1) % categories.length; // go to next category
            loadCategory();// update circles for new category
        };

        // initialize
        loadCategory();

        const removeBtn = document.getElementById("removeBtn");

        removeBtn.onclick = () =>{
            const category = categories[currentCategoryIndex];
            document.getElementById(category).src=" ";
        }

        function toggleNavBar(){ // function to open/close nav bar
            const nav=document.getElementById("navbar");
            nav.classList.toggle("open");
        }