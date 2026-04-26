import './EducationApp.css'

const education = [
  {
    id: 1,
    degree: 'Master of Information Technology',
    school: 'University of Auckland',
    period: 'Jul 2025 – Present',
    gpa: 'GPA: 7.0 / 9.0',
    details: null,
  },
  {
    id: 2,
    degree: 'Bachelor of Computer and Information Science',
    school: 'Auckland University of Technology',
    period: 'Jul 2022 – Jun 2025',
    gpa: 'GPA: 7.42 / 9.0',
    details: 'Double Major: Software Development & Networks and Cybersecurity',
  },
]

function EducationApp() {
  return (
    <div className="education-container">
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-dot" />
              {index < education.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <p className="edu-period">{edu.period}</p>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-gpa">{edu.gpa}</p>
              {edu.details && <p className="edu-details">{edu.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationApp