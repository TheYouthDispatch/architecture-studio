// ========================================
// Architecture Studio UI
// Version 1
// ========================================

let currentTool = "Walls";

const sidebarButtons = document.querySelectorAll(".sidebar button");
const footerButtons = document.querySelectorAll("footer button");
const propertyTitle = document.querySelector(".properties h3");
const saveButton = document.querySelector(".gold");

// ----------------------------
// Sidebar Tool Selection
// ----------------------------

sidebarButtons.forEach(button => {

    button.addEventListener("click", () => {

        sidebarButtons.forEach(btn => {
            btn.classList.remove("active-tool");
        });

        button.classList.add("active-tool");

        currentTool = button.textContent.trim();

        propertyTitle.textContent = currentTool + " Properties";

        console.log("Selected:", currentTool);

    });

});

// Make Walls selected on startup
sidebarButtons[0].classList.add("active-tool");

// ----------------------------
// Bottom Toolbar
// ----------------------------

footerButtons.forEach(button => {

    button.addEventListener("click", () => {

        footerButtons.forEach(btn => {
            btn.classList.remove("active-bottom");
        });

        button.classList.add("active-bottom");

        console.log("Mode:", button.textContent);

    });

});

footerButtons[0].classList.add("active-bottom");

// ----------------------------
// Save Button
// ----------------------------

saveButton.addEventListener("click", () => {

    alert("Project saved! (placeholder)");

});

// ----------------------------
// Undo / Redo
// ----------------------------

const topButtons = document.querySelectorAll(".top-buttons button");

topButtons[0].addEventListener("click", () => {
    alert("Undo (coming soon)");
});

topButtons[1].addEventListener("click", () => {
    alert("Redo (coming soon)");
});

// ----------------------------
// Delete Button
// ----------------------------

const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", () => {

    alert("Delete selected object (coming soon)");

});

// ----------------------------
// Property Controls
// ----------------------------

const colorPicker = document.querySelector("input[type='color']");
const sliders = document.querySelectorAll("input[type='range']");
const material = document.querySelector("select");

colorPicker.addEventListener("input", () => {

    console.log("Color:", colorPicker.value);

});

material.addEventListener("change", () => {

    console.log("Material:", material.value);

});

sliders.forEach(slider => {

    slider.addEventListener("input", () => {

        console.log(slider.value);

    });

});



init();
