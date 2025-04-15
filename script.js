// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference, otherwise use dark theme as default
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    let isDarkTheme;
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
        isDarkTheme = savedTheme === 'dark';
    } else {
        // Set dark theme as default
        document.body.dataset.theme = 'dark';
        isDarkTheme = true;
        localStorage.setItem('theme', 'dark');
    }
    
    // Update theme icon based on current theme
    updateThemeIcon(isDarkTheme);
    
    // Initialize particles.js
    initParticles(isDarkTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.dataset.theme === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(!isDark);
        
        // Update particles for the new theme
        initParticles(!isDark);
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
            initParticles(e.matches);
        }
    });
    
    // Function to initialize particles.js with theme-specific settings
    function initParticles(isDark) {
        // Clear any existing particles
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        
        // Configure particles based on theme
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: isDark ? '#ffffff' : '#8e44ad'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: isDark ? 0.7 : 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: isDark ? '#ffffff' : '#8e44ad',
                    opacity: 0.6,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
});
