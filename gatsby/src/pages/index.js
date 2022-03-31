import * as React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
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
`;

export default function IndexPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>I'm Graham, a <Sparkles>Web Developer</Sparkles> living in Los Angeles.</h1>
      </IntroStyles>
      <InfoStyles>
        <ul>
          <li>
            <p>I currently work for a fast-growing company called <strong>The Predictive Index</strong>, leaders of the emerging industry of talent optimization.</p>
          </li>
          <li>
            <p>I've built websites for artists, authors, and small businesses, as well as non-profits like libraries, schools, community centers, and education foundations.</p>
          </li>
          <li>
            <p>Lorem ipsum, something about my outdoor activities, what I like to do for fun, etc.</p>
          </li>
        </ul>
      </InfoStyles>
      <ContactMe boldText="Let's talk!" text="Do you want to colloborate on a web project?" buttonText="Send me a message"/>
      <Skills />
      <ProjectList projects={projects} />
      <ContactMe boldText="" text="If you've made it here, I'm sure there's something we can chat about." buttonText="Send me a message"/>
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


