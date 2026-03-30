import './Desktop.css'

const apps = [
    { id: 'about', label: 'About Me', icon: '/src/assets/icons/AboutMe.png' },
    { id: 'contact', label: 'Contact Me', icon: '/src/assets/icons/ContactMe.png' },
    { id: 'experience', label: 'Experience', icon: '/src/assets/icons/Exp.png' },
    { id: 'projects', label: 'Projects', icon: '/src/assets/icons/Projects.png' },
    { id: 'education', label: 'Education', icon: '/src/assets/icons/Education.png' },
    { id: 'spotify', label: 'Spotify', icon: '/src/assets/icons/Spotify.png' },
]

function Desktop() {
    return (
    <div className="desktop">
        <div className="icon-grid">
        {apps.map(app => (
            <div key={app.id} className="icon-item" onDoubleClick={() => console.log(app.id)}>
            <img src={app.icon} alt={app.label} />
            <span>{app.label}</span>
            </div>
        ))}
        </div>
    </div>
    )
}

export default Desktop