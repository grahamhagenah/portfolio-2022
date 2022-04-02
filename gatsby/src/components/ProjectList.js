import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'

let delay = 0;

const ProjectGridStyles = styled.div`

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 8rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .projects-intro {
    margin: 100px 0;
    max-width: 60%;
  }
  
  .gatsby-image-wrapper {
    max-height: 300px;
    border-radius: 5px;
  }

  img {
    max-height: 300px;
  }
`;

const ProjectStyles = styled.div` 
  display: grid;
  overflow: hidden;

  .project-details {
    padding: 2rem 0;
    max-width: 75%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  .project-title {
    font-weight: 600;
    font-size: 28px;
  }

  .single-project:hover .project-link {
    text-decoration: underline;
  }

  .single-project:hover .arrow {
    padding: 0 8px;
    transition: 1s;
  }

  .arrow {
    padding: 0 4px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    display: inline;
    transition: 1s;
  }

  .single-project:hover img {
    transform: scale(1.3);
    transition: 1s;
  }

  .single-project img {
    transform: scale(1.25);
    transition: 1s !important;
  }

`;

function SingleProject( {project} ) {
  //set increasing fade-in delay for each project
  delay = delay + 1
  return (
    <>
      <ProjectStyles data-sal="fade-in" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay={100 * delay}>
        <Link to={`/project/${project.slug.current}`} className="single-project">
          <Img style={{ height: "350px" }} objectFit="contain" fluid={project.image.asset.fluid} alt={project.name} />
          <div className="project-details">
            <h3 className="project-title">{project.name}</h3>
            <p>{project.subtitle}</p>
            <p className="project-link read-more-link">View Project</p>
            <span className="arrow">›</span>
          </div>
        </Link>
      </ProjectStyles>
    </>
  )
}

export default function ProjectList( {projects} ) {
  return (
    <ProjectGridStyles>
      <div className="projects-intro">
        <h2>What I've been up to lately</h2>
        <p>I like to stay busy and always have something in the works. I often build applications using unfamiliar libraries and frameworks to keep up with the industry. Take a look at some of my personal and professional projects.
          
        </p>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </ProjectGridStyles>
  )
}