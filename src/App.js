import Routes from './Routes'
import { BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/GlobalView/Navbar'
import Footer from './components/GlobalView/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Routes/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
