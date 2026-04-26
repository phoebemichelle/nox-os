import './Desktop.css'
import SpotifyApp from './SpotifyApp'
import AboutApp from './AboutApp'
import ReadmeApp from './ReadmeApp'
import ExperienceApp from './ExperienceApp'
import EducationApp from './EducationApp'
import ProjectsApp from './ProjectsApp'
import ContactApp from './ContactApp'

const apps = [
  { id: 'about', label: 'About Me', icon: '/icons/Bunny.png', content: <AboutApp />, width: 700, height: 450 },
  { id: 'readme', label: 'README.md', icon: '/icons/ReadMe.png', content: <ReadmeApp />, width: 600, height: 450 },
  { id: 'experience', label: 'Experience', icon: '/icons/Experience.png', content: <ExperienceApp />, width: 550, height: 500 },
  { id: 'education', label: 'Education', icon: '/icons/Educated.png', content: <EducationApp />, width: 450, height: 270 },
  { id: 'projects', label: 'Projects', icon: '/icons/Computer.png', content: <ProjectsApp />, width: 540, height: 480 },
  { id: 'contact', label: 'Contact Me', icon: '/icons/Contact.png', content: <ContactApp />, width: 440, height: 480 },
  { id: 'spotify', label: 'Spotify', icon: '/icons/Music.png', custom: true, content: <SpotifyApp /> },
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