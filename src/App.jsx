import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/client/pages/Home'
import Library from '@/client/pages/Library'
// import Dashboard from "@/admin/pages/Dashboard";

// CSS
import '@/client/assets/css/style.css'
import '@/client/assets/css/barfiller.css'
import '@/client/assets/css/font-awesome.min.css'
import '@/client/assets/css/magnific-popup.css'
import '@/client/assets/css/nowfont.css'
import '@/client/assets/css/owl.carousel.min.css'
import '@/client/assets/css/rockville.css'
import '@/client/assets/css/slicknav.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Giao diện Client */}
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />

        {/* Giao diện Admin */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
