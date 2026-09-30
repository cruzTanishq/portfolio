import { useState } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About"
import Software from './components/Software';


import './App.css'

function App() {
  return (

    <div className="min-h-screen bg-[#1a0442] text-gray-300 font-sans scroll-smooth selection:bg-gray-700 selection:text-[#963fbb]">
 
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 md:px-12 flex flex-col gap-15">
        
        <NavBar />
        
        <main className="flex flex-col gap-20">
          <section id="home">
            <Hero />
          </section>

         
             <section id="about">
            <About />
          </section>
      
       
          
          <section id="software">
            <Software />
          </section>
              {/* 
          <section id="hardware">
            <Hardware />
          </section> 
          */}
        </main>

        {/* <Footer /> */}

      </div>
    </div>
  );
}

export default App;
