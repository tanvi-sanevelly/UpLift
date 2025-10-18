// --- Overlapping Images Click-to-Cycle Effect ---
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".overlap-images img");
    const container = document.querySelector(".overlap-images");
  
    // Store images in an array to reorder them easily
    let order = Array.from(images);
  
    container.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        // Move clicked image to the end (back)
        const clicked = e.target;
        container.removeChild(clicked);
        container.appendChild(clicked);
      }
    });
  });
  