import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SinglePage from './pages/singlepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/singlepage/:id"} element={<SinglePage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
