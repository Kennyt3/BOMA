import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './component/header'
import Footer from './component/footer'

function App() {
  return (
    <BrowserRouter>
      <div className='h-screen'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
  )
}

export default App
