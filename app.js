const toggleSwitch = document.querySelector('.toggle-input');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Switch to dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save theme preference to local storage
    } else {
        // Switch to light mode
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Save theme preference to local storage
    }
});

// Check local storage for theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme); // Apply saved theme preference
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true; // Set toggle switch to checked if dark mode is active
    }
}
