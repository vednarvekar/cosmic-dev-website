import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import UnderDevelopment from './pages/UnderDevelopment';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/under-development" element={<UnderDevelopment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
