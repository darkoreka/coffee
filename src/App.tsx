
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/Home/Home'
import Reviews from './pages/Reviews/Reviews'
import ShowRoom from './pages/Show-Room/show-room'
import ReviewDetails from './pages/Reviews/components/review-details'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showroom" element={<ShowRoom />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="/reviews/:productId" element={<ReviewDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App