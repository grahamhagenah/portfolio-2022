import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {PortableText} from '@portabletext/react'
import Browser from '../assets/images/browser.svg'

const IntroStyles = styled.div`

  h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 10rem 0 5rem 0;
    max-width: 650px;
    line-height: 1.25;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

`;

const ProjectStyles = styled.div`
  .overview {
    max-width: 60%;
  }

  .project-button-links {
    margin-bottom: 4rem;
  }

  .browser-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gatsby-image-wrapper {
    border-radius: 0 0 10px 10px;
  }

  .browser-view {
    margin: 5rem 0;
    border: 2px solid white;
    transition: .25s;
    border-radius: 10px;

    :hover {
      cursor: pointer;
      border: 2px solid var(--black);
      
      #project-url {
      color: var(--black);
    }
  }

  #project-url {
    position: absolute;
    margin: 0;
    font-size: 14px;
    color: var(--grey);

    @media screen and (max-width: 700px) {
      font-size: .7rem;
    }
  }

`;

export default function SingleProjectPage({ data: { project } }) {
  return (
    <div>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>{project.name}</h1>
      </IntroStyles>
      <ProjectStyles>
        <div className="project-button-links">
          <button className="mr">View code</button>
          <button>View Site</button>
        </div>
        <section className="overview">
          <PortableText value={project.text} />
          <h3>Stack:</h3>
        </section>
        <section className="overview-2">
          <PortableText value={project.overview} />
        </section>
        <div className="browser-view">
          <div className="browser-top">
            <p id="project-url">{project.url}</p>
            <img className="browser-graphic" src={Browser} alt="" />
          </div>
          <Img fluid={project.image.asset.fluid} alt=''></Img>
        </div>
      </ProjectStyles>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug} }) {
      subtitle
      name 
      url
      id
      stack
      overview: _rawOverview(resolveReferences: {maxDepth: 5})
      text: _rawText(resolveReferences: {maxDepth: 5})
      image {
        asset {
          fluid(maxWidth:800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;