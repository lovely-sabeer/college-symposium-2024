/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
			colors: {
        'primary-btn': '#D32F2F',      // Brighter red for primary buttons (better contrast)
        'secondary-btn': '#F57C00',    // Brighter orange for secondary buttons
        'navbar-bg': 'rgb(30, 41, 59)',        // Slightly lighter dark blue-gray for navbar background
        'navbar-hover': 'rgb(30, 41, 59, 0.4)',        // Slightly lighter dark blue-gray for navbar background
        'navbar-text': '#FFFFFF',      // White for navbar text (great contrast)
        'hover-navbar': '#FFC107',     // Bright yellow/gold for hover on navbar items
        'hover-btn': '#C2185B',        // Rich magenta for hover effects on buttons
        'body-bg': '#F1F5F9',          // Very light grey for background, softer on eyes
        'body-text': '#111827',        // Darker text color for better readability on light backgrounds
        'section-bg': '#FFFFFF',       // White for clean section backgrounds
        'section-border': '#E5E7EB',   // Lighter gray border for sections (subtle)
        'shadow-color': '#6B7280',     // Medium gray for shadows
        'link-hover': '#FFEB3B',       // Bright yellow for links on hover
        'muted-text': '#6B7280',       // Muted gray for secondary text
			},
			fontFamily: {
        'abril': ['"Abril Fatface"', 'serif'],
			},	
			rotate: {
        'x-45': 'rotateX(45deg)',
        'x-90': 'rotateX(90deg)',
        'x-180': 'rotateX(180deg)',
      }
		},
  },
  plugins: [],
}

