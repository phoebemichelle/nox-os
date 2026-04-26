function AboutApp({ onClose }) {
  return (
    <div style={{
      width: '600px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex',
        flex: 1,
        padding: '20px',
        gap: '20px',
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
          <p>I'm Phoebe and I'm awesome!</p>
          <p>Write more about yourself here...</p>
        </div>

        {/* Right side - photo */}
        <div style={{
          width: '250px',
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