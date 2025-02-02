# EmergeTech Hub Landing Page

A landing page for EmergeTech Hub, a college club.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Theme Switching**: Dynamic light/dark theme with theme-specific logos
- **Modern UI**: 
  - Purple gradient accents
  - Smooth animations
  - Card-based layout
  - Glass-morphism effects

## File Structure

```
Club Landing Page/
├── index.html        # Main HTML structure
├── style.css        # Styles and theme variables
├── script.js        # Theme switching functionality
├── light.png        # Logo for light theme
└── dark.png         # Logo for dark theme
```

## Setup

1. Clone or download the repository
2. No build tools or dependencies required
3. Open `index.html` in a modern web browser

## Theme Implementation

The theme system uses CSS variables for consistent styling and JavaScript for theme switching. Features include:

- System theme detection
- Theme persistence using localStorage
- Automatic logo switching
- Smooth transitions between themes

Theme variables are defined in `style.css`:
```css
:root {
    /* Light theme variables */
    --bg-primary: #ffffff;
    --text-primary: #2d1832;
    --accent-color: #8e44ad;
    /* ... */
}

[data-theme="dark"] {
    /* Dark theme variables */
    --bg-primary: #1a1a1a;
    --text-primary: #ffffff;
    --accent-color: #9b59b6;
    /* ... */
}
```

## Development

### CSS Organization
- Theme variables at the top
- Consistent naming conventions
- Modular section styling
- Mobile-first responsive design

### JavaScript Features
- Event listeners for theme toggle
- System theme preference detection
- Local storage for theme persistence
- Smooth transitions

## Credits

- **Web Development**: Sam
