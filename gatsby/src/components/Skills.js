import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import Sparkles from './Sparkles';

const SkillsStyles = styled.div`

  .skills {
    margin-bottom: 175px;
  }

  .skills p {
    max-width: 60%;
  }

  #skills-grid {
    margin: 5rem 0;
  }

  #skills-grid li:nth-child(1) {
    background-color: #e8940038;
  }

  #skills-grid li:nth-child(2) {
    background-color: #d0331438;
  }

  #skills-grid li:nth-child(3) {
    background-color: #8ed01438;
  }

  #skills-grid li:nth-child(4) {
    background-color: #14d0a338;
  }

  #skills-grid li:nth-child(5) {
    background-color: #1420d038;
  }

  #skills-grid li:nth-child(6) {
    background-color: #b414d038;
  }

  #skills-grid li:nth-child(7) {
    background-color: #e0eaf1;
  }

  #skills-grid ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  #skills-grid li:hover {
    transform: scale(1.05);
    transition: .5s;
  }

  .skill-icon {
    height: 2rem;
  }

  #about-me-link:hover + .arrow {
    padding: 0 8px;
    transition: 1s;
  }

  #about-me-link:hover {
    text-decoration: underline;
  }

  #about-me-link arrow {
    padding: 0 4px;
    transition: 1s;
  }

  li svg {
    transform: translateY(4px);
    padding-right: 0.75rem;
    font-size: 20px;
  }

  li {
    display: inline-block;
    font-weight: 500;
    padding: 1rem 2.5rem;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 700px) {
      display: block;
      margin: 2rem auto;
      max-width: 200px;
    }
  }

`;

export default function Skills() {
  return (
    <SkillsStyles>
      <section className="skills">
        <h2>Where I started</h2>
        <p>In 2015, I was an aspiring <Sparkles>designer</Sparkles>. I made a website to show off my art, built with nothing but HTML & CSS. Simple as can be. But still it took weeks of experimentation before I got something live. I scoured the web for answers to all the basic questions. I learned about servers. Domain names. I wrote a heading tag. I tinkered with the CSS box model. Every discovery was a joy. Eventually my interest shifted from design to development. I decided to dive deeper into the creative possibilities of the web.
</p>
        {/* <a href="/about" id="about-me-link" className="read-more-link">Read more</a> */}
        {/* <span className="arrow">›</span> */}
        <div id="skills-grid">
          <ul>
            <li data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000"><FaHtml5 />HTML</li>
            <li data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease" data-sal-duration="1000"><FaCss3Alt />CSS</li>
            <li data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000"><SiJavascript />JavaScript</li>
            <li data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease" data-sal-duration="1000"><FaReact />React</li>
            <li data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000"><FaDatabase />PHP & MySQL</li>
            <li data-sal="slide-up" data-sal-delay="350" data-sal-easing="ease" data-sal-duration="1000"><FaWordpress />WordPress</li>
            <li data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease" data-sal-duration="1000"><FaUniversalAccess />Accessibility</li>
          </ul>
        </div>
      </section>
    </SkillsStyles>
  )
}