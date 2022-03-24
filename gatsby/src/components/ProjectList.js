import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectGridStyles = styled.div`

  .project-grid {
    display: grid;
    ${'' /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */}
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 100px;
  }

  .projects-intro {
    margin: 100px 0;
    max-width: 500px;
  }

  h2 {
    font-weight: 500;
    font-size: 30px;
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
    padding: 1.5rem;
  }

  .project-title {
    font-weight: 500;
    font-size: 23px;
  }

`;

function SingleProject( {project} ) {
  return (
    <ProjectStyles data-sal="fade-in" data-sal-easing="ease" data-sal-duration="1000">
      <Link to={`/project/${project.slug.current}`}>
        <Img style={{ height: "350px" }} objectFit="contain" fluid={project.image.asset.fluid} alt={project.name} fadeIn="true"/>
      </Link>
      <div class="project-details">
        <Link to={`/project/${project.slug.current}`}>
          <h3 class="project-title">{project.name}</h3>
        </Link>
        <p>{project.subtitle}</p>
        <p>View Project</p>
      </div>
    </ProjectStyles>
  )
}

export default function ProjectList( {projects} ) {
  return (
    <ProjectGridStyles>
      <div class="projects-intro">
        <h2>Some Things I've Built</h2>
        <p>I like to stay busy and always have something in the works. I often build applications using unfamiliar libraries and frameworks to keep up with the industry. Take a look at some of my personal and professional projects.</p>
      </div>
      <div class="project-grid">
        {projects.map(project => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </ProjectGridStyles>
  )
}