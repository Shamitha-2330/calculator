# Calculator

A responsive web calculator with a dark neon-glow theme. It supports basic arithmetic, decimals and percentages, and works on both desktop and mobile screens.

[Calculator Screenshot](Screenshot.png)

## Features

- Addition, subtraction, multiplication and division
- Decimal and percentage input
- `CE` button to clear the display
- Right-aligned display with a `0` placeholder
- Neon glow styling with hover and press effects on buttons
- Responsive layout that adapts to phone screens using a CSS media query

## Tech Stack

- **HTML5**: calculator layout using a table with `colspan` and `rowspan`
- **CSS3**: dark theme, glow effects (`text-shadow`, `box-shadow`) and media queries
- **JavaScript (ES6)**: DOM manipulation and event handling for button clicks and calculation

## Project Structure

```
calculator/
├── index.html
├── style.css
├── app.js
├── Screenshot.png
└── README.md
```

## Run Locally

```bash
git clone https://github.com/Shamitha-2330/calculator.git
cd calculator
```

Then open `index.html` in any browser. No installation or build step needed.

## How It Works

1. Each button calls a JavaScript function through an `onclick` handler.
2. Number and operator buttons add their value to the display input.
3. The `=` button evaluates the expression and shows the result.
4. `CE` clears the display.

## Future Improvements

- Keyboard input support
- Backspace button
- Calculation history
- Handling for divide-by-zero and invalid expressions
- Light/dark theme toggle

## Author

**Shamitha**
