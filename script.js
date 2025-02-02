// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
        updateThemeIcon(savedTheme === 'dark');
    } else if (systemPrefersDark) {
        document.body.dataset.theme = 'dark';
        updateThemeIcon(true);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.dataset.theme === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(!isDark);
    });

    // Update moon/sun icon
    function updateThemeIcon(isDark) {
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    }

    // Handle system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.body.dataset.theme = newTheme;
            updateThemeIcon(e.matches);
        }
    });
});
