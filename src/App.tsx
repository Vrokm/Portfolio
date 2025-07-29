import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
//import MarkdownViewer from "./components/MarkdownViewer";
import BlogDetailPage from './components/BlogDetailPage';




const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[60px] md:pt-[64px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
      </main>
      <Footer className="mt-0" />
      
    </div>
  );
};

export default App;