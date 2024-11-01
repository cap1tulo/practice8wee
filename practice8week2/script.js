// Function to remove selected item from dropdown
function removeDropdownItem() {
    const dropdown = document.getElementById("dropdown");
    dropdown.remove(dropdown.selectedIndex);
}

// Function to display a random image from a list
function displayRandomImage() {
    const images = [
        "https://via.placeholder.com/150/FF5733",
        "https://via.placeholder.com/150/33FF57",
        "https://via.placeholder.com/150/3357FF"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById("imageContainer").innerHTML = `<img src="${randomImage}" alt="Random Image">`;
}

// Function to highlight bold text
function highlightBold() {
    const boldText = document.querySelectorAll("b");
    boldText.forEach(item => item.classList.add("highlight"));
}

// Function to remove highlight from bold text
function removeHighlight() {
    const boldText = document.querySelectorAll("b");
    boldText.forEach(item => item.classList.remove("highlight"));
}

// Function to display window dimensions on resize
function displayWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("windowSize").textContent = `Width: ${width}, Height: ${height}`;
}

// Event listener for window resize
window.addEventListener("resize", displayWindowSize);

// Initial display of window size
displayWindowSize();
