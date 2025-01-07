import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx';
import ResumeWebsite from './pages/projects/resume-website.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/resume-website" element={<ResumeWebsite />} />
      </Routes>
  </BrowserRouter>
)
