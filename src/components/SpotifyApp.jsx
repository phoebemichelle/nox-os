import './SpotifyApp.css'

function SpotifyApp({ onClose }) {
  return (
    <div className="spotify-container">
      <div className="spotify-header">
        <img
          src="/icons/Close.png"
          alt="close"
          onClick={onClose}
          className="spotify-close"
        />
      </div>
      <div className="spotify-body">
        <span className="spotify-emoji">🎵</span>
        <p className="spotify-title">work in progress</p>
        <p className="spotify-subtitle">come back soon ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
      </div>
    </div>
  )
}

export default SpotifyApp