// Get all sections
const sections = document.querySelectorAll("section");
// Get our unordered list that we use for navigation
const navigationList = document.getElementById("navList");

// Loop through all HTML sections
sections.forEach((section) => {
  // For each section we:
  // 1. Get the section title. Ex: Tourism
  const sectionTitle = section.querySelector(".title");
  // 2. Extract the text content
  const title = sectionTitle.textContent;
  // 3. Create a new navigational list item
  const listItem = document.createElement("li");
  // 4. We set its text to the title of the section
  listItem.innerHTML = title;
  // 5. We add a click event listener to each item
  // That smoothly navigates to the assigned section
  listItem.addEventListener("click", function () {
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
  // 6.Finally add the item to the navigation list
  navigationList.appendChild(listItem);
});

// Adding a scroll event listener
document.addEventListener("scroll", function () {
  // Loop through all sections
  sections.forEach((section) => {
    // 1. Extract the text content of the first child element in each section
    const title = section.firstElementChild.textContent;
    // 2. Identify each section position
    const sectionPosition = section.getBoundingClientRect();
    // 3. Check if section position is in view
    if (sectionPosition.top >= 100 && sectionPosition.top <= 150) {
      // 4. Extract all list items
      const navigationItems = navigationList.querySelectorAll("li");
      // Loop through all navigation items
      navigationItems.forEach((navItem) => {
        // 1. Check if title has the same name
        if (navItem.textContent == title) {
          // 2. Set class name to active
          navItem.className = "active";
        } else {
          // 3. Otherwise, clear it
          navItem.className = "";
        }
      });
    }
  });
});
