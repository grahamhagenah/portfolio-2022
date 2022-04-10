import * as React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import { graphql } from 'gatsby'
import Sparkles from '../components/Sparkles';

const IntroStyles = styled.div`

  h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 10rem 0 8rem 0;
    max-width: 650px;
    line-height: 1.25;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
      font-size: 30px;
    }
  }

`;

const InfoStyles = styled.div`

  ul {
    display: grid;
    list-style: none;
    margin: 0 0 3rem 0;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .skills {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }
`;

export default function IndexPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>I'm Graham, a Web Developer living in Los Angeles.</h1>
      </IntroStyles>
      <InfoStyles>
        <ul>
          <li>
            <p>I currently work for a fast-growing company called <strong><a className="link" target="_blank" href="https://www.predictiveindex.com/">The Predictive Index</a></strong>, leaders of the emerging industry of talent optimization.</p>
          </li>
          <li>
            <p>I've built websites for artists, authors, and small businesses, as well as non-profits like libraries, schools, and community centers.</p>
          </li>
          <li>
            <p>When I'm not on the web, I'm climbing rocks, taking photos, cycling through the busy city streets, and raving about movies with friends.</p>
          </li>
        </ul>
      </InfoStyles>
      <ContactMe boldText="Let's talk!" text="Want to make something together?" buttonText="Send me a message"/>
      <InfoStyles>
        <section className="skills">
          <h2>A bit about my skillset</h2>
          <p>In 2019, I got a job at a small agency developing websites for non-profits in the greater Boston area. I learned the full stack during my time there - how to make a great website from pitch meeting to final deploy. Everything from setting up a Linux server to replicating a complex layout in CSS Grid to writing custom form validation in JavaScript. I made meaningful connections with wonderful clients (teachers, librarians, authors, artists, nurses) and learned how to listen deeply to all of their concerns and aspirations.</p>
          <a href="/about" id="about-me-link" className="read-more-link">Read more about me</a>
          <span className="arrow">›</span>
        </section>
      </InfoStyles>
      <Skills stack={['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'WordPress', 'Accessibility']} />
      {/* <AboutMe /> */}
      <ProjectList projects={projects} />
      <ContactMe boldText="Let me know!" text="I wonder what we have in common that led you here." buttonText="Send me a message"/>
    </>
  )
}

export const query = graphql`
  query projectQuery {
    projects: allSanityProjects {
      nodes {
        id
        name
        subtitle
        slug {
          current
        } 
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }

`;


