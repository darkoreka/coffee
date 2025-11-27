
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import ShowRomm from './pages/Show-Room/Show-Room'
import Home from './pages/Home/Home'
import Reviews from './pages/Reviews/Reviews'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showroom" element={<ShowRomm />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App