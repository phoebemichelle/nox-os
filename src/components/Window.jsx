import { useState, useRef, useEffect } from 'react'
import React from 'react'
import './Window.css'

function Window({ app, onClose, onFocus, zIndex, isMinimised, onMinimise }) {
  const [position, setPosition] = useState({ 
    x: window.innerWidth / 2 - (app.width || 400)/2,
    y: window.innerHeight / 2 - (app.height || 300)/2,
  })
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const onMouseDown = (e) => {
    dragging.current = true
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
    onFocus()
  }

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragging.current) return
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y
      })
    }
    const onMouseUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <div
      className="window"
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        backgroundColor: app.custom ? 'transparent' : '#f0e8f8',
        border: app.custom ? 'none' : '3px solid #7c4fa0',
        boxShadow: app.custom ? 'none' : '4px 4px 0px #7c4fa0',
        display: isMinimised ? 'none' : 'block',
      }}
      onMouseDown={onFocus}
    >
      {app.custom ? (
        <div onMouseDown={onMouseDown}>
          {React.cloneElement(app.content, { onClose })}
        </div>
      ) : (
        <>
          <div className="window-titlebar" onMouseDown={onMouseDown}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={app.icon} alt={app.label} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
              <span className="window-title">{app.label}</span>
            </div>
            <div className="window-buttons">
              <img src="/src/assets/icons/Minimise.png" alt="minimise" style={{ width: '30px', height: '30px', objectFit: 'contain' }} className="window-btn" onClick={(e) => { e.stopPropagation(); onMinimise(); }} />
              <img src="/src/assets/icons/Close.png" alt="close" style={{ width: '30px', height: '30px', objectFit: 'contain' }} className="window-btn" onClick={onClose} />
            </div>
          </div>
          <div className="window-content">
            {app.content}
          </div>
        </>
      )}
    </div>
  )
}

export default Window