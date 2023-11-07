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
    <div className="font-monteserrat bg-white">
      <div>
        <BrowserRouter>
            <NavBar />
              <div className="mx-6">
                <Routes>
                <Route path="clinica-sao-patricio/" element={<Index />} />
                <Route path="clinica-sao-patricio/equipe" element={<Team />} />
                <Route path="clinica-sao-patricio/sobre" element={<AboutPage />} />
                <Route path="clinica-sao-patricio/contato" element={<ContactPage />} />
              </Routes>
              </div>
            <Footer />
        </BrowserRouter>
      </div>
 
    </div>
  )
}

export default App