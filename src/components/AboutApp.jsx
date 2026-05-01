import { useState } from 'react'
import './AboutApp.css'

function AboutApp() {
  const [tooltip, setTooltip] = useState(null)

  return (
    <div className="about-container">
      <div className="about-inner">

        {/* Left side - bio */}
        <div className="about-bio">
          <h2 className="about-heading">Hi!</h2>
          <p>I'm Phoebe Sunata! Welcome to my portfolio! <br/> ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
          <br/>
          <p>I'm a Master of IT student at the University of Auckland, graduating end of 2026.
            I enjoy building things people actually use. I'm particularly interested in practical,
            user-focused applications and understanding how technology fits into everyday life. I like
            learning by doing, improving as I go, and figuring out how to make ideas actually work outside of a classroom.</p>
          <br/>
          <p>When I'm not drowning in uni work (｡•︿•｡), I'm usually gaming, cooking, hiking, fishing, or binge-watching
            something on Netflix — fully depends on the mood (˶ˆᗜˆ˵)</p>

          <div className="about-links">

            <div className="tooltip-wrapper">
              <a href="https://www.linkedin.com/in/phoebe-sunata" target="_blank" rel="noreferrer"
                className="about-link"
                onMouseEnter={() => setTooltip('linkedin')}
                onMouseLeave={() => setTooltip(null)}>
                💼 LinkedIn
              </a>
              {tooltip === 'linkedin' && (
                <div className="tooltip">linkedin.com/in/phoebe-sunata</div>
              )}
            </div>

            <div className="tooltip-wrapper">
              <a href="https://github.com/phoebemichelle" target="_blank" rel="noreferrer"
                className="about-link"
                onMouseEnter={() => setTooltip('github')}
                onMouseLeave={() => setTooltip(null)}>
                🐙 GitHub
              </a>
              {tooltip === 'github' && (
                <div className="tooltip">github.com/phoebemichelle</div>
              )}
            </div>

            <div className="tooltip-wrapper">
              <a href="mailto:phoebemichelle012@gmail.com"
                className="about-link"
                onMouseEnter={() => setTooltip('email')}
                onMouseLeave={() => setTooltip(null)}>
                📩 Email
              </a>
              {tooltip === 'email' && (
                <div className="tooltip">phoebemichelle012@gmail.com</div>
              )}
            </div>

          </div>
        </div>

        {/* Right side - photo */}
        <div className="about-photo">
          <img src="/images/Phoebe.png" alt="Phoebe" />
        </div>

      </div>
    </div>
  )
}

export default AboutApp