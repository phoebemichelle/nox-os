import { useState } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Menubar from './components/Menubar'
import Window from './components/Window'

function App() {
  const [openApps, setOpenApps] = useState([])
  const [zIndexMap, setZIndexMap] = useState({})
  const [minimisedApps, setMinimisedApps] = useState([])
  const [topZ, setTopZ] = useState(10)

  const openApp = (app) => {
    if (openApps.find(a => a.id === app.id)) {
      // already open, bring to front and unminimise
      setMinimisedApps(minimisedApps.filter(i => i !== app.id))
      focusApp(app.id)
    return
    }
    setOpenApps([...openApps, app])
    setZIndexMap(prev => ({ ...prev, [app.id]: topZ + 1 }))
    setTopZ(prev => prev + 1)
  }

  const closeApp = (id) => {
    setOpenApps(openApps.filter(a => a.id !== id))
    setMinimisedApps(minimisedApps.filter(i => i !== id))
  }

  const focusApp = (id) => {
    setZIndexMap(prev => ({ ...prev, [id]: topZ + 1 }))
    setTopZ(prev => prev + 1)
  }

  const toggleMinimise = (id) => {
    if (minimisedApps.includes(id)) {
      setMinimisedApps(minimisedApps.filter(i => i !== id))
      focusApp(id)
    } else {
      setMinimisedApps([...minimisedApps, id])
    }
  }

  return (
    <>
      <Menubar />
      <Desktop onOpenApp={openApp} />
      {openApps.map(app => (
        <Window
          key={app.id}
          app={app}
          onClose={() => closeApp(app.id)}
          onFocus={() => focusApp(app.id)}
          onMinimise={() => toggleMinimise(app.id)}
          zIndex={zIndexMap[app.id]}
          isMinimised={minimisedApps.includes(app.id)}
        />
      ))}
      <Taskbar openApps={openApps} onAppClick={toggleMinimise} />
    </>
  )
}

export default App