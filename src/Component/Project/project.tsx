import React from 'react';
import './project.css';
import andrew from '../../assets/Emsons.jpeg'; // Adjust the path as necessary
import car from '../../assets/Car2.webp'; // Adjust the path as necessary
import Ecommerce from '../../assets/Ecommerce.webp'; // Adjust the path as necessary
import Tereen from '../../assets/terren.webp'; // Adjust the path as necessary



interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
   {
    title: 'E-Commerce Platform',
    description: 'A scalable online store with payment integration, product management, and user-friendly UI.',
    image: Ecommerce,
    link: 'https://ecommerce-sage-one-87.vercel.app/kids'
  },
     {
    title: 'Company portfolio',
    description: 'A portfolio website showcasing company projects, team, and services with a modern design.',
    image: Tereen,
    link: 'https://terren.vercel.app/'
  },
 
  {
    title: 'Corporate Website',
    description: 'products display, company information, and contact details for a corporate entity.',
    image: car,
    link: 'https://mern-stack-project-47aa.vercel.app/'
  },
  {
    title: 'CRM Solution',
    description: 'A Customer Relationship Management platform to track leads, sales, and customer support.',
    image: andrew,
    link: '#'
  }
];

const Project = () => (
  <section className="project-section" id="projects">
    <h2 className="project-title">Explore Our Recent Projects</h2>
    <div className="project-grid">
      {projects.map((proj, idx) => (
        <div className="project-cards" key={idx}>
          <img src={proj.image} alt={proj.title} className="project-images" />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          {proj.link && (
            <a href={proj.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Project;