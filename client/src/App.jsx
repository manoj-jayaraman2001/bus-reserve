import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
