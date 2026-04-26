import { useState, useEffect } from 'react'
import './Taskbar.css'

function Taskbar({ openApps, onAppClick }) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      setDate(now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <div className="start-btn">
            <img src="/src/assets/icons/Star.png" alt="start" />
        </div>
        {openApps.map(app => (
          <div key={app.id} className="taskbar-app" onClick={() => onAppClick(app.id)}>
            {app.label}
          </div>
        ))}
      </div>
      <div className="taskbar-right">
        <img src="/src/assets/icons/Wifi.png" alt="wifi" />
        <img src="/src/assets/icons/Sound.png" alt="volume" />
        <span>{date}, {time}</span>
      </div>
    </div>
  )
}

export default Taskbar