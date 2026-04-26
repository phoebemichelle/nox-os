function SpotifyApp({ onClose }) {
  return (
    <div style={{
      width: '500px',
      height: '400px',
      backgroundColor: '#1a1a2e',
      borderRadius: '10px',
      border: '3px solid #7c4fa0',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px',
      }}>
        <img
          src="/src/assets/icons/Close.png"
          alt="close"
          onClick={onClose}
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        />
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}>
        <span style={{ fontSize: '48px' }}>🎵</span>
        <p style={{
          fontFamily: 'Pixelify Sans, sans-serif',
          fontSize: '24px',
          color: '#c9a8e0',
          letterSpacing: '2px',
        }}>work in progress</p>
        <p style={{
          fontFamily: 'Karla, sans-serif',
          fontSize: '14px',
          color: '#666',
        }}>come back soon ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
      </div>
    </div>
  )
}

export default SpotifyApp