# Mohit Rajpurohit - Personal Portfolio Website

A clean, modern, responsive personal portfolio website built with HTML5, Vanilla CSS3, and JavaScript, specifically tailored for **Mohit Rajpurohit**, first-year B.Tech Electronics & Communication Engineering (ECE) student at JECRC University, Jaipur.

---

## 🌟 Key Features

- **Dark Navy / Charcoal Palette**: Sophisticated high-tech dark background (`#070a12`, `#0a0f1d`) with vibrant electric blue (`#2563eb`) and cyan (`#38bdf8`) accents and soft ambient glows.
- **Glassmorphism Design**: Frosted glass cards with subtle borders, hover lift transitions, and glow effects.
- **Responsive Architecture**: Fully optimized layout for desktops, laptops, tablets, and smartphones (mobile navigation drawer included).
- **Smooth Navigation & ScrollSpy**: Sticky header with active section tracking as the user scrolls.
- **Real Photo Integration**: Includes Mohit's professional portrait with a luminous framing ring and floating academic badges.
- **One-Click Contact & Socials**:
  - One-click email copy button with toast notification.
  - Functional contact form triggering email composer with prefilled details.
  - Direct links to official **GitHub** (`mohit-902`) and **LinkedIn** profiles.
- **Zero Heavy Dependencies**: Pure standard HTML, CSS, and JS with zero NPM build steps required.

---

## 📁 Project Structure

```text
FINAL SHOW/
├── index.html          # Main semantic HTML5 portfolio page
├── assets/
│   └── mohit.jpg       # Profile portrait photo
├── css/
│   └── style.css       # Responsive dark-theme stylesheet
├── js/
│   └── main.js         # Navigation, scrollspy, form handler & copy feedback
└── README.md           # Documentation & editing guide
```

---

## 🚀 How to Open and View Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer. It will immediately open in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Live Server in VS Code
If you are using Visual Studio Code:
1. Open the folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ How to Edit & Add New Information

Every section is commented and modular:

1. **Adding New Skills**:
   Open [index.html](file:///c:/Users/hp/Desktop/FINAL%20SHOW/index.html#L418-L584) and find the `<section id="skills">`. Duplicate any `<div class="skill-pill-card">` to add new programming languages, microcontrollers, or tools.

2. **Adding New Projects**:
   Open [index.html](file:///c:/Users/hp/Desktop/FINAL%20SHOW/index.html#L669-L723) and locate the `<section id="projects">`. You can add new cards with links to your GitHub repositories as you complete hardware lab projects.

3. **Adding New Certifications**:
   Open [index.html](file:///c:/Users/hp/Desktop/FINAL%20SHOW/index.html#L589-L664) and locate `<section id="certifications">`. Add new cards with the workshop name and issuing organization.

4. **Changing Contact Email**:
   Search for `mohitrajpurohit460@gmail.com` in [index.html](file:///c:/Users/hp/Desktop/FINAL%20SHOW/index.html) and [main.js](file:///c:/Users/hp/Desktop/FINAL%20SHOW/js/main.js) to update your contact email address.

---

## 🌐 Deploying to GitHub Pages (Free)

1. Push this repository to your GitHub account: `https://github.com/mohit-902/portfolio`
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**, choose `main` (or `master`), and folder `/ (root)`.
4. Click **Save**. Your website will be live at `https://mohit-902.github.io/portfolio/` in a few minutes!
