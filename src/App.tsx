
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home/Home'
import Reviews from './pages/Reviews/Reviews'
import ShowRoom from './pages/Show-Room/Show-Room'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showroom" element={<ShowRoom />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App