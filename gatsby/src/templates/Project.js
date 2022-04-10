import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {PortableText} from '@portabletext/react'
import Browser from '../assets/images/browser.svg'
import Skills from '../components/Skills'

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

const SkillsVertical = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;

    li {
      display: block;
      width: 150px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  li:last-of-type {
    margin-bottom: 0;
  }

`;

const ProjectStyles = styled.div`
  .overview {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  .why {
    max-width: 60%;
  }

  .how {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project-button-links {
    margin-bottom: 4rem;
  }

  .stack-description {
    margin: auto 0;
  }

  .project-description section {
    margin: 13rem 0;
  }

  .browser-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-overview {
    margin-bottom: 10rem;
  }

  .browser-graphic {
    background-color: #f6f6f6;
  }

  .browser-view {
    margin: 10rem 0;
    border: 2px solid white;
    transition: .25s;
    border-radius: 10px;
    overflow: hidden;

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
    font-size: 1.5rem;
    color: var(--grey);

    @media screen and (max-width: 700px) {
      font-size: 30%;
    }
  }
`;

export default function SingleProjectPage({ data: { project } }) {

let stack = project.stack

  return (
    <div>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>{project.name}</h1>
      </IntroStyles>
      <ProjectStyles>
        <div className="project-button-links">
          <button className="mr-2">View code</button>
          <button>View Site</button>
        </div>
        <section className="overview">
          <PortableText value={project.text} />
          <h3><span className="mr-1">Stack: </span><strong>{project.stack.join('  +  ')}</strong></h3>
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
        <div className='project-description'>
          <section className='why'>
            <PortableText value={project.why} />
          </section>
          <section className='how'>
            <SkillsVertical>
              <Skills stack={stack} />
            </SkillsVertical>
            <div className="stack-description">
              <PortableText value={project.stackDescription} />
            </div>
          </section>
          <section className='how'>
            <div className="stack-description">
              <PortableText value={project.stackDescription} />
            </div>

          </section>
          <section className='why'>
            <PortableText value={project.why} />
          </section>
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
      why: _rawWhy(resolveReferences: {maxDepth: 5})
      stackDescription: _rawStackDescription (resolveReferences: {maxDepth: 5})
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