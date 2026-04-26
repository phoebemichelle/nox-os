import { useState, useEffect } from 'react'
import './SystemMessage.css'

function SystemMessage() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 15000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="system-message">
      <div className="system-message-titlebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>💜</span>
          <span className="system-message-title">system message</span>
        </div>
        <img
          src="/icons/Close.png"
          alt="close"
          style={{ width: '20px', height: '20px', objectFit: 'contain' }}
          className="system-message-close"
          onClick={() => setVisible(false)}
        />
      </div>
      <div className="system-message-content">
        <p>hi! welcome to Nox OS ૮ ˶ᵔ ᵕ ᵔ˶ ა</p>
        <p>double-click icons to open programs.</p>
      </div>
    </div>
  )
}

export default SystemMessage