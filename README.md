# 🖥️ Nox OS — Interactive Portfolio

> A portfolio website disguised as a retro desktop operating system, built with React.

![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb?style=flat&logo=react)
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646cff?style=flat&logo=vite)
![Pixel Art](https://img.shields.io/badge/Icons-Hand%20Drawn-ff69b4?style=flat)

---

## ✨ About

I didn't want to build just another portfolio website. Instead, I built **Nox OS** — an interactive desktop simulation where every "app" is a window containing information about me. Every icon you see was hand-drawn pixel by pixel in Aseprite, with inspiration from Pinterest. This project has been such a good creative outlet.

**Live site:** [phoebesunata.vercel.app](https://phoebesunata.vercel.app)

---

## 🎮 Features

- 🖱️ **Double click** any desktop icon to open its window
- 🪟 **Drag** windows around by their title bar
- ➖ **Minimize** windows using the button or by clicking the app in the taskbar
- ✕ **Close** windows using the close button
- 📋 **Taskbar** at the bottom tracks all open windows
- 📩 **Contact form** powered by EmailJS — messages land straight in my inbox
- 🎵 **Spotify app** — coming soon!
- ⏰ **Live clock** displayed in the system tray

---

## 🛠️ Built With

| Tool | Purpose |
|------|---------|
| [React](https://react.dev/) | Frontend framework |
| [Vite](https://vitejs.dev/) | Build tool |
| CSS | All custom styling, no UI libraries |
| [Figma](https://figma.com/) | Prototyping and design |
| [Aseprite](https://www.aseprite.org/) | Hand-drawn pixel art icons |
| [EmailJS](https://www.emailjs.com/) | Contact form email delivery |

---

## 💡 Inspiration

Inspired by retro pixelated Windows OS interfaces and a super creative TikToker [@jjrangzx](https://www.tiktok.com/@jjrangzx) who built her own portfolio as a desktop simulation. I saw it and immediately thought — I need to do this.

---

## 📁 Project Structure

```
src/
  components/
    Desktop.jsx       # Desktop icons and layout
    Window.jsx        # Reusable draggable window
    Taskbar.jsx       # Bottom taskbar
    Menubar.jsx       # Top menu bar
    AboutApp.jsx      # About Me window
    ReadmeApp.jsx     # README.md window
    ExperienceApp.jsx # Experience window
    EducationApp.jsx  # Education window
    ProjectsApp.jsx   # Projects window
    ContactApp.jsx    # Contact form window
    SystemMessage.jsx # Welcome message window
    SpotifyApp.jsx    # Spotify window (WIP)
  assets/
    icons/            # Hand-drawn pixel art icons
    images/           # Background and photos
```

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/phoebemichelle/nox-os

# Install dependencies
cd portfolio
npm install

# Create a .env file with your EmailJS credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Start the dev server
npm run dev
```

---

## 👩‍💻 Author

**Phoebe Sunata**
Master of IT Student @ University of Auckland

[![GitHub](https://img.shields.io/badge/GitHub-phoebemichelle-181717?style=flat&logo=github)](https://github.com/phoebemichelle)

---

<p align="center">built with love (and a lot of hard work) ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
