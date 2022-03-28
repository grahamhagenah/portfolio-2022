import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const IntroStyles = styled.div`

  h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 175px 0 50px 0;
    max-width: 650px;
    line-height: 1.25;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

`;

const ProjectStyles = styled.div`

  .overview {
    max-width: 800px;
  }

`;

export default function SingleProjectPage({ data: { project } }) {
  return (
    <div>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>{project.name}</h1>
        <h1>{project.subtitle}</h1>
      </IntroStyles>
      <ProjectStyles>
        <section className="overview">
        </section>
        <Img fluid={project.image.asset.fluid} alt=''></Img>
      </ProjectStyles>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug} }) {
      subtitle
      name 
      id
      text {
        children {
          text
        }
      }
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