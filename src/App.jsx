import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Menubar from './components/Menubar'

function App() {
  return (
    <>
      <Menubar />
      <Desktop />
      <Taskbar openApps={[]} onAppClick={() => {}} />
    </>
  )
}

export default App