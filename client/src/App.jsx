import React, { useRef } from "react";

import { Header, About, Work, Skills, Testimonial, Footer } from "./containers";
import { Navbar } from "./components";

const App = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary w-full flex flex-col ">
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        workRef={workRef}
        skillsRef={skillsRef}
        testimonialRef={testimonialRef}
        footerRef={footerRef}
      />

      <Header />
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={workRef}>
        <Work />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={testimonialRef}>
        <Testimonial />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
