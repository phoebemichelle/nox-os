import './Desktop.css'
import SpotifyApp from './SpotifyApp'
import AboutApp from './AboutApp'

const apps = [
  { id: 'about', label: 'About Me', icon: '/src/assets/icons/Bunny.png', content: <AboutApp />, width: 600, height: 500 },
  { id: 'readme', label: 'README.md', icon: '/src/assets/icons/ReadMe.png', content: <p>README</p> },
  { id: 'experience', label: 'Experience', icon: '/src/assets/icons/Experience.png', content: <p>Experience</p> },
  { id: 'education', label: 'Education', icon: '/src/assets/icons/Educated.png', content: <p>Education</p> },
  { id: 'projects', label: 'Projects', icon: '/src/assets/icons/Computer.png', content: <p>Projects</p> },
  { id: 'contact', label: 'Contact Me', icon: '/src/assets/icons/Contact.png', content: <p>Contact</p> },
  { id: 'spotify', label: 'Spotify', icon: '/src/assets/icons/Music.png', custom: true, content: <SpotifyApp /> },
]

function Desktop({ onOpenApp }) {
  return (
    <div className="desktop">
      <div className="icon-grid">
        {apps.map(app => (
          <div key={app.id} className="icon-item" onDoubleClick={() => onOpenApp(app)}>
            <img src={app.icon} alt={app.label} />
            <span>{app.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Desktop