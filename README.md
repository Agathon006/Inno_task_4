# Inno_task_4
### Advanced calculator app that can perform such base operations as addition, subtraction, multiplication, division, percentage, sign change etc.

---

## Task: [link](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view?usp=sharing)

---

## How to run the app:

1. Choose your project directory:
   `cd some-folder`
1. Download the project files:
   `git clone https://github.com/Agathon006/Inno_task_4`
1. Enter the project folder:
   `cd Inno_task_4`
1. Install dependencies:
   `npm i`
1. Build the app:
   `npm run build`
1. Launch the app:
   `npm run start` (The app will open in your web browser)

---

## App on Vercel (you can try it here):

### Link will be here soon..

---

## Folder Structure

- The `build` folder stores optimized project files (general script and its source map)
- The `src` folder is the main source code directory of the project
  - The `assets` folder stores all the static assets used in the project
    - The `fonts` folder contains fonts for app
      - The `Inter` folder contains fonts files for Inter-Regular font (.css, .eot, .otf, .svg, .ttf, .woff, .woff2)
    - The `icons` holds app icon file (.ico)
    - The `images` stores any other images used in the project (.svg, .png)
  - The `scripts` folder stores all the application styles (.js)
    - The `calc` sub-folder specifically is for calculator-related logic (.js)
      - The `operations` folder contains modules for various calculator operations (.js)
    - The `theme` folder stores scripts for handling theme switching functionality (.js)
    - The `utils` folder contains utility functions (.js)
  - The `styles` folder holds all the CSS files (.css, .scss, .css.map)
    - The `parts` contains CSS files for specific sections or components. (.css, .scss, .css.map)
    - The `template` folder holds general CSS files for app template, including reset.css (.css, .scss, .css.map)

---

## Technologies and instruments

- HTML
- CSS (SCSS)
- Javascript
- Webpack
- ESLint
