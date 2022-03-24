import React from 'react'
import Img from 'gatsby-image'

export default function SingleProjectPage({ data: { project } }) {
  return (
    <div>
      <Img fluid={project.image.asset.fluid} alt=''></Img>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug} }) {
      name 
      id
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