        // categories and options
        const items = {
            hair: ["../assets/hair1.png", "/assets/hair2.png", "/assets/hair3.png"],
            dress: ["/assets/dress.png"],
            shirt: ["/assets/shirt1.png", "/assets/shirt2.png"],
            pants: ["/assets/pants1.png", "/assets/pants2.png"],
            accessory: ["/assets/accessory1.png", "/assets/accessory2.png"]
        };

        const categories = Object.keys(items);
        let currentCategoryIndex = 0;

        // html elements
        const categoryLabel = document.getElementById("categoryLabel");
        const circles = [ 
            document.getElementById("opt1"), 
            document.getElementById("opt2"), 
            document.getElementById("opt3") 
        ];

        // update circles for current category
        function loadCategory() {
            const category = categories[currentCategoryIndex];
            const list = items[category];

            categoryLabel.textContent = category.charAt(0).toUpperCase() + category.slice(1);

            circles.forEach((circle, i) => {
                circle.innerHTML = "";

                if (list[i]) {
                    let img = document.createElement("img");
                    img.src = list[i];
                    circle.appendChild(img);

                    circle.onclick = () => {
                        document.getElementById(category).src = list[i];
                    };
                } else {
                    circle.onclick = null;
                }
            });
        }

        // arrows
        document.getElementById("prevBtn").onclick = () => {
            currentCategoryIndex =
                (currentCategoryIndex - 1 + categories.length) % categories.length;
            loadCategory();
        };

        document.getElementById("nextBtn").onclick = () => {
            currentCategoryIndex =
                (currentCategoryIndex + 1) % categories.length;
            loadCategory();
        };

        // initialize
        loadCategory();

        const removeBtn = document.getElementById("removeBtn");

        removeBtn.onclick = () =>{
            const category = categories[currentCategoryIndex];
            document.getElementById(category).src=" ";
        }

        function toggleNavBar(){
            const nav=document.getElementById("navbar");
            nav.classList.toggle("open");
        }