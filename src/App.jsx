import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage'
import Services from './components/Services'
import Partners from './components/Partners'
import Contact from './components/Contact'
import ClientsPage from './components/ClientsPage'
import ContractsProfile from './components/ContractsProfile'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contracts" element={<ContractsProfile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
