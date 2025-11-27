
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import ShowRomm from './pages/Show-Room/Show-Room'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
      <Routes>
        {/* Use a nested layout so Navbar + footer stay across routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showroom" element={<ShowRomm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App