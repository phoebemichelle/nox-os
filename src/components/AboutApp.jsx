import { useState } from 'react'

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  backgroundColor: '#e8d5f5',
  color: '#7c4fa0',
  fontFamily: 'Karla, sans-serif',
  fontSize: '13px',
  fontWeight: '600',
  padding: '6px 14px',
  borderRadius: '20px',
  border: '1px solid #c9a8e0',
  textDecoration: 'none',
}

const tooltipStyle = {
  position: 'absolute',
  bottom: '110%',
  left: '0',
  backgroundColor: '#7c4fa0',
  color: 'white',
  fontFamily: 'Karla, sans-serif',
  fontSize: '12px',
  padding: '4px 10px',
  borderRadius: '6px',
  whiteSpace: 'nowrap',
  zIndex: 9999,
}

function AboutApp({ onClose }) {
  const [tooltip, setTooltip] = useState(null)

  return (
    <div style={{ width: '700px', height: '450px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, padding: '10px', gap: '10px' }}>

        {/* Left side - bio */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Karla, sans-serif' }}>
          <h2 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0' }}>Hi!</h2>
          <p>I'm Phoebe Sunata! Welcome to my portfolio! <br/> ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
          <br/>
          <p>I'm a Master of IT student at the University of Auckland, graduating end of 2026.
            I enjoy building things people actually use. I'm particularly interested in practical,
            user-focused applications and understanding how technology fits into everyday life. I like
            learning by doing, improving as I go, and figuring out how to make ideas actually work outside of a classroom.</p>
          <br/>
          <p>When I'm not drowning in uni work (｡•︿•｡), I'm usually gaming, cooking, hiking, fishing, or binge-watching
            something on Netflix — fully depends on the mood (˶ˆᗜˆ˵)</p>

          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>

            <div style={{ position: 'relative' }}>
              <a href="https://www.linkedin.com/in/phoebe-sunata" target="_blank" rel="noreferrer"
                style={linkStyle}
                onMouseEnter={() => setTooltip('linkedin')}
                onMouseLeave={() => setTooltip(null)}>
                💼 LinkedIn
              </a>
              {tooltip === 'linkedin' && (
                <div style={tooltipStyle}>linkedin.com/in/phoebe-sunata</div>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <a href="https://github.com/phoebemichelle" target="_blank" rel="noreferrer"
                style={linkStyle}
                onMouseEnter={() => setTooltip('github')}
                onMouseLeave={() => setTooltip(null)}>
                🐙 GitHub
              </a>
              {tooltip === 'github' && (
                <div style={tooltipStyle}>github.com/phoebemichelle</div>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <a href="mailto:phoebemichelle012@gmail.com"
                style={linkStyle}
                onMouseEnter={() => setTooltip('email')}
                onMouseLeave={() => setTooltip(null)}>
                📩 Email
              </a>
              {tooltip === 'email' && (
                <div style={tooltipStyle}>phoebemichelle012@gmail.com</div>
              )}
            </div>

          </div>
        </div>

        {/* Right side - photo */}
        <div style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/Phoebe.png"
            alt="Phoebe"
            style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>

      </div>
    </div>
  )
}

export default AboutApp