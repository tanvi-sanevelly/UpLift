// Select all dropdown toggles
const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(toggle => {
  const dropdown = toggle.nextElementSibling; // The <ul> right after the toggle

  // Toggle each dropdown on click
  toggle.addEventListener('click', (e) => {
    e.preventDefault();

    // Close all other dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.style.display = 'none';
    });

    // Toggle the current one
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdowns if clicking outside
window.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown-parent')) {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
  }
});
