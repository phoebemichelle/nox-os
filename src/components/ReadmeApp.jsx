import './ReadmeApp.css'

function ReadmeApp({ onClose }) {
  return (
    <div style={{
      width: '550px',
      height: '450px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div className="readme-content">

        <h2 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0', marginBottom: '4px' }}>
          👾 README.md
        </h2>
        <p style={{ color: '#999', fontSize: '13px', marginBottom: '20px' }}>Welcome to Nox OS — glad you found this file.</p>

        <h3 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0', marginBottom: '8px' }}>✦ Inspiration</h3>
        <p>
          This portfolio was inspired by retro pixelated Windows Operating System interfaces and a super creative TikToker
          <a href="https://www.tiktok.com/@jjrangzx" target="_blank" rel="noreferrer" style={{ color: '#7c4fa0', marginLeft: '4px' }}>@jjrangzx</a> —
          who built her own portfolio as a desktop simulation. I saw it and immediately thought, I need to do this.
        </p>

        <h3 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0', margin: '20px 0 8px' }}>✦ Why though?</h3>
        <p>
          I didn't want to build just another portfolio website. Anyone can throw their resume on a page, 
          I wanted something unique, something that actually shows personality. This project ended up being
          such a good creative outlet for me. Oh, and every single icon you see? I drew them myself in
          Aseprite, with inspo from Pinterest. Pixel by pixel. 🎨
        </p>

        <h3 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0', margin: '20px 0 8px' }}>✦ Tools Used</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>React</strong> — frontend framework</li>
          <li><strong>Vite</strong> — build tool</li>
          <li><strong>CSS</strong> — all custom, no UI libraries</li>
          <li><strong>Figma</strong> — prototyping and design</li>
          <li><strong>Aseprite</strong> — pixel art icon creation</li>
        </ul>

        <h3 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0', margin: '20px 0 8px' }}>✦ How It Works</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🖱️ <strong>Double click</strong> any desktop icon to open its window</li>
          <li>🪟 <strong>Drag</strong> windows around by their title bar</li>
          <li>➖ <strong>Minimize</strong> windows using the button or clicking the app in the taskbar</li>
          <li>✕ <strong>Close</strong> windows using the close button</li>
          <li>📋 <strong>Taskbar</strong> at the bottom tracks everything that's open</li>
          <li>📩 <strong>Contact Me</strong> lets you send me a message directly from the website and it lands straight in my inbox (in progress)</li>
          <li>🎵 <strong>Spotify</strong> is my own little music player using Spotify's API (in progress)</li>
        </ul>

        <p style={{ marginTop: '24px', color: '#999', fontSize: '13px' }}>
          built with love by Phoebe ૮꒰ ˶• ༝ •˶꒱ა ♡
        </p>

      </div>
    </div>
  )
}

export default ReadmeApp