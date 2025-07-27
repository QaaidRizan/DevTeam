import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import Web from './Pages/Projectweb/Projectweb.jsx';
import { Link } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Link to="/projectweb" />} />
          </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

