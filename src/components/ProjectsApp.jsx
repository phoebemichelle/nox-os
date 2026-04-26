import './ProjectsApp.css'

const projects = [
  {
    id: 1,
    title: 'Nox OS — This Portfolio',
    period: '2026',
    bullets: [
      'Designed and built an interactive portfolio styled as a retro desktop OS, featuring draggable windows, a taskbar, and custom pixel art icons drawn in Aseprite.',
    ],
    skills: ['React', 'Vite', 'CSS', 'Figma', 'Aseprite'],
  },
  {
    id: 2,
    title: 'Exam Question Generator — Research Prototype',
    period: 'Nov 2025',
    bullets: [
      'Led research into automated exam question generation, analysing existing approaches and identifying system limitations.',
      'Built a working web prototype using AI tools to demonstrate automated multi-variant question generation.',
      'Produced a formal report and presented findings to academic stakeholders.',
    ],
    skills: ['Web Development', 'AI', 'Research'],
  },
  {
    id: 3,
    title: 'Connect — Full-Stack Social Web App',
    period: 'Jun 2024',
    bullets: [
      'Co-developed a full-stack social platform in a team of 4 with real-time messaging, secure authentication, and user data management.',
    ],
    skills: ['React', 'Firebase', 'Firestore'],
  },
  {
    id: 4,
    title: 'Verdantoff — Android App (Capstone)',
    period: 'Jun 2025',
    bullets: [
      'Led documentation and client communication, delivering meeting minutes, a user manual, and project portfolio to a real external client.',
      'Built Android features including real-time messaging, voice calling, Firebase auth, and account management in a team of 3.',
      'Adapted deliverables iteratively based on client feedback, practising end-to-end project delivery.',
    ],
    skills: ['Flutter', 'Firebase', 'Firestore', 'Version Control'],
  },
  {
    id: 5,
    title: 'Other Projects',
    period: null,
    bullets: [
      'Virtual Pet Game — collaborative Java app with Apache Derby database integration.',
      'UI/UX Mockups — interactive interface prototypes built in Figma for multiple class projects.',
    ],
    skills: ['Java', 'Figma'],
  },
]

function ProjectsApp() {
  return (
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.period && <span className="project-period">{project.period}</span>}
          </div>
          <ul className="project-bullets">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <div className="project-skills">
            {project.skills.map((skill, i) => (
              <span key={i} className="skill-tag">#{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsApp