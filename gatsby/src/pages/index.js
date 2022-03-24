import * as React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe';
import ProjectList from '../components/ProjectList';

const IntroStyles = styled.div`

  h1 {
    font-size: 34px;
    font-weight: 600;
    padding: 175px 0 100px 0;
    max-width: 500px;
    line-height: 1.25;
  }

`;

const InfoStyles = styled.div`

  ul {
    display: grid;
    list-style: none;
    margin: 0 0 50px 0;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
  }
`;

export default function IndexPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>Hey! I'm Graham. I'm a Web Developer living in Los Angeles.</h1>
      </IntroStyles>
      <InfoStyles>
        <ul>
          <li>
            <p>I'm currently building front-end solutions for The Predictive Index, the industry leaders of talent optimization.</p>
          </li>
          <li>
            <p>I've built many accessible, performant websites for non-profit organizations, including schools, libraries, and art centers.</p>
          </li>
          <li>
            <p>I write in HTML, CSS, Javascript, and PHP. My library of choice is React. My current interest is in static-site generators.</p>
          </li>
        </ul>
      </InfoStyles>
      <ContactMe boldText="Hire me!" text="I'm happy you made it here. Let's talk." buttonText="Say Hello"/>
      <ProjectList projects={projects} />
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


