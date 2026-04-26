function SpotifyApp({ onClose }) {
  return (
    <div style={{
      width: '500px',
      height: '400px',
      backgroundColor: '#b0b0b0',
      borderRadius: '10px',
      border: '3px solid #7c4fa0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
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
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default SpotifyApp