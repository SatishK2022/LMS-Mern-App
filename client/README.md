# LMS Frontend

### Setup Instructions
1. Clone the Project :-
```bash
    git clone https://github.com/SatishK2022/LMS-Mern-App.git
```

2. Move into the Directory :-
```bash
    cd LMS-Mern-App/client
```

3. Install Dependencies :-
```bash
    npm install
```

4. Run the Server :-
```bash
    npm run dev
```

### How to Setup TailwindCSS [Link](https://tailwindcss.com/docs/guides/vite)
1. Install Tailwind and Other Dependencies :-
```bash
    npm install -D tailwindcss postcss autoprefixer
```

2. Create `tailwind.config.js` file :-
```bash
    npx tailwindcss init -p
```

3. Add the files and extensions to `tailwind.config.js` `content` Property :-
```bash
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
```

4. Add the tailwind directives on the top of `index.css` file :-
```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Then Run the Server, Tailwind should be integrated😊
```bash
    npm run dev
```

### Adding Plugins and Dependencies
```bash
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```