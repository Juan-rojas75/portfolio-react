// AnotherComponent.js
import React, { Component } from 'react';
import Navbar from '../../components/navbar.jsx';
//PAGES
import HomePage from "./home.jsx";

export default class PageHome extends Component {
  handleFirstButtonClick = () => {
    alert('Primera acción ejecutada!');
  };
  
  render() {
    const links = [
        { href: "home", text: "Home" },
        { href: "about", text: "About me" },
        { href: "project", text: "Project" },
        { href: "contact", text: "Contact" },
      ];
    return (
      <div className=''>
        <Navbar links={links} />
        <div className="p-4 mt-16"> {/* Ajuste de margen superior para el navbar fijo */}
        <section id="home" className="min-h-screen">
          <HomePage/>
        </section>
        <section id="about" className="min-h-screen">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>This is the About Me section.</p>
        </section>
        <section id="project" className="min-h-screen">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>Here are the projects we offer.</p>
        </section>
        <section id="contact" className="min-h-screen">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p>Get in touch with us through the Contact section.</p>
        </section>
      </div>
      </div>
    );
  }
}