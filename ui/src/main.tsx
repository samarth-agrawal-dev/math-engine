import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Algebra from './components/Algebra.tsx';
import Trignometry from './components/Trignometry.tsx';
import Limits from './components/Limits.tsx';
import Derivatives from './components/Derivatives.tsx';
import Integration from './components/Integration.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="algebra" element={<Algebra />} />
        <Route path="trignometry" element={<Trignometry />} />
        <Route path="limits" element={<Limits />} />
        <Route path="derivatives" element={<Derivatives />} />
        <Route path="integration" element={<Integration />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
