import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Otp from './components/Otp'

function App() {


  return (
   <Router>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/otp' element={<Otp/>} />

    </Routes>
      <Footer/> 
   </Router>
  )
}

export default App
