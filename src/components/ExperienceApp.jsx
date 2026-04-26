import './ExperienceApp.css'

const experiences = [
  {
    id: 1,
    title: 'ICT Trainer',
    company: 'Scratchpad NZ',
    period: 'Sep 2025 - Present',
    location: 'Auckland, NZ',
    bullets: [
      'Teach Python and JavaScript to students aged 7–14, adapting lessons to varied skill levels.',
      'Guide students through structured projects, building programming fundamentals and computational thinking.',
      'Manage a mixed-ability classroom, strengthening communication and stakeholder management skills.',
    ],
    skills: ['Python', 'JavaScript', 'Teaching'],
  },
  {
    id: 2,
    title: 'Barista',
    company: 'Starbucks',
    period: 'Dec 2022 - Oct 2023',
    location: 'Auckland, NZ',
    bullets: [
      'Delivered fast-paced customer service in a high-volume environment, maintaining accuracy and professionalism.',
    ],
    skills: ['Customer Service', 'Teamwork', 'Time Management'],
  },
  {
    id: 3,
    title: 'Founder & Operations Manager',
    company: 'Sourshop.id',
    period: 'Sep 2020 - Jun 2022',
    location: 'Bali, Indonesia',
    bullets: [
      'Founded and scaled an online fashion business, achieving 1,000+ orders over 2 years with a 4.8-star rating.',
      'Owned all business functions end-to-end — inventory, suppliers, customer service, and order fulfilment.',
      'Used sales data and customer feedback to identify top products and optimise purchasing decisions.',
      'Maintained high customer satisfaction through proactive communication and consistent service quality.',
    ],
    skills: ['Business Operations', 'Product Management', 'E-commerce', 'Stakeholder Management'],
  },
]

function ExperienceApp() {
  return (
    <div className="experience-container">
      {experiences.map(exp => (
        <div key={exp.id} className="experience-card">
          <h3 className="exp-title">{exp.title}</h3>
          <p className="exp-company">{exp.company} • {exp.period} • {exp.location}</p>
          <ul className="exp-bullets">
            {exp.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <div className="exp-skills">
            {exp.skills.map((skill, i) => (
              <span key={i} className="skill-tag">#{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceApp