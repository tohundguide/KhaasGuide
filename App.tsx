import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ServicePage } from './pages/ServicePage';
import { AiConsultant } from './components/AiConsultant';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:slug" element={<ServicePage />} />
            <Route path="/:country/:slug" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
        <AiConsultant />
      </div>
    </Router>
  );
}

export default App;
