function AboutApp({ onClose }) {
  return (
    <div style={{
      width: '700px',
      height: '450px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex',
        flex: 1,
        padding: '10px',
        gap: '10px',
      }}>
        {/* Left side - bio */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'Pixelify Sans, sans-serif',
        }}>
          <h2 style={{ fontFamily: 'Pixelify Sans', color: '#7c4fa0' }}>Hi!</h2>
          <p>I'm Phoebe! Welcome to my portfolio ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
          <br/>
          <p>I'm a Master of IT student at the University of Auckland, graduating end of 2026. 
            I enjoy building things people actually use. I'm particularly interested in practical, 
            user-focused applications and understanding how technology fits into everyday life. I like 
            learning by doing, improving as I go, and figuring out how to make ideas actually work outside of a classroom.</p>
          <br/>
          <p>When I'm not drowning in uni work (｡•︿•｡), I'm usually gaming, cooking, hiking, fishing, or binge-watching 
            something on Netflix — fully depends on the mood (˶ˆᗜˆ˵)</p>
        </div>

        {/* Right side - photo */}
        <div style={{
          width: '300px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <img 
            src="/src/assets/images/Phoebe.png" 
            alt="Phoebe"
            style={{
              width: '100%',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutApp