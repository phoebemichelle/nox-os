import './Desktop.css'

const apps = [
    { id: 'about', label: 'About Me', icon: '/src/assets/icons/Bunny.png' },
    { id: 'readme', label: 'README.md', icon: '/src/assets/icons/ReadMe.png' },
    { id: 'experience', label: 'Experience', icon: '/src/assets/icons/Experience.png' },
    { id: 'education', label: 'Education', icon: '/src/assets/icons/Educated.png' },
    { id: 'projects', label: 'Projects', icon: '/src/assets/icons/Computer.png' },
    { id: 'contact', label: 'Contact Me', icon: '/src/assets/icons/Contact.png' },
    { id: 'spotify', label: 'Spotify', icon: '/src/assets/icons/Music.png' },
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