import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import '@/assets/css/App.css'
import { Menu } from '../../../shared/Menu';


function App() {

  return (
    <>
      <Menu />
    <br /><br />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>REACT + EXPRESS</h1>
    </>
  )
}

export default App
