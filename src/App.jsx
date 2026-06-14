import { useState, useEffect } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Theme management (persists to localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main className="flex-1">
        <AboutMe />

        <Experience />
        
        <Projects />
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
