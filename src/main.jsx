import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

createRoot(document.getElementById('root')).render(
  <StrictMode c>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/APropos' element={<APropos />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
