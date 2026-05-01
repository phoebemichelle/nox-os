import { useState, useRef, useEffect } from 'react'
import React from 'react'
import './Window.css'

function Window({ app, onClose, onFocus, zIndex, isMinimised, onMinimise }) {
  const isMobile = window.innerWidth <= 768

  const getAvailableHeight = () => window.innerHeight - 80
  const getAvailableWidth = () => window.innerWidth

  const getWindowWidth = () => Math.min(app.width || 400, getAvailableWidth() - 40)
  const getWindowHeight = () => Math.min(app.height || 300, getAvailableHeight() - 40)

  const getInitialPosition = () => ({
    x: (getAvailableWidth() - getWindowWidth()) / 2,
    y: 30 + (getAvailableHeight() - getWindowHeight()) / 2,
  })

  const [position, setPosition] = useState(getInitialPosition)
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  const onMouseDown = (e) => {
    if (isMobile) return
    dragging.current = true
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
    onFocus()
  }

  useEffect(() => {
    const getAvailableHeight = () => window.innerHeight - 80
    const getAvailableWidth = () => window.innerWidth
    const getWindowWidth = () => Math.min(app.width || 400, getAvailableWidth() - 40)
    const getWindowHeight = () => Math.min(app.height || 300, getAvailableHeight() - 40)
    const getInitialPosition = () => ({
      x: (getAvailableWidth() - getWindowWidth()) / 2,
      y: 30 + (getAvailableHeight() - getWindowHeight()) / 2,
    })

    const handleResize = () => {
      if (!dragging.current) {
        setPosition(getInitialPosition())
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [app.width, app.height])

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
        left: isMobile ? 0 : position.x,
        top: isMobile ? 30 : position.y,
        width: isMobile ? '100vw' : getWindowWidth(),
        height: isMobile ? 'calc(100vh - 70px)' : getWindowHeight(),
        zIndex,
        backgroundColor: app.custom ? 'transparent' : '#f0e8f8',
        border: app.custom ? 'none' : '3px solid #7c4fa0',
        boxShadow: app.custom ? 'none' : '4px 4px 0px #7c4fa0',
        display: isMinimised ? 'none' : 'block',
      }}
      onMouseDown={onFocus}
    >
      {app.custom ? (
        <div 
          onMouseDown={onMouseDown} 
          style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
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
              <img
                src="/icons/Minimise.png"
                alt="minimise"
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                className="window-btn"
                onClick={(e) => { e.stopPropagation(); onMinimise(); }}
              />
              <img
                src="/icons/Close.png"
                alt="close"
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                className="window-btn"
                onClick={onClose}
              />
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