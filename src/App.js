import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import TagPage from './pages/TagPage';
import ResultsPage from './pages/ResultsPage';


function App() {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tag" element={<TagPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Footer />
    </div>

  );
}

export default App;
