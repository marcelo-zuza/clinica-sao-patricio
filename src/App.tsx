import { BrowserRouter, Routes, Route } from "react-router-dom"
// components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

// routes
import Index from "./components/Index"
import Team from "./components/Team"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"





const App = () => {
  return (
    <div className="font-monteserrat">
      <div className="mx-6">
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
 
    </div>
  )
}

export default App