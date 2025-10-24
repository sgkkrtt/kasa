import { Routes, Route } from 'react-router-dom'
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import NotFound from "./pages/404.jsx"
import './App.css'

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    <Footer />
    </>
  )
}

export default App
