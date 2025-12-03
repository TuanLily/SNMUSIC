import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/client/pages/Home'
// import Dashboard from "@/admin/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Giao diện Client */}
        <Route path="/" element={<Home />} />

        {/* Giao diện Admin */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
