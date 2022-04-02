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

const SkillsStyles = styled.div`

  .skills {
    margin-bottom: 175px;
  }

  .skills p {
    max-width: 60%;
  }

  #skills-grid {
    margin: 10rem 0;
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

export default function AboutMe() {
  return (
    <SkillsStyles>
      <section className="skills">
        <h2>Where I started</h2>
        <p>Lorem ipsum something about where I started, what I like about web development, etc.</p>
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
      <section className="skills-2">
        <h2>More about my skillset</h2>
        <p>In 2019, I got a job at a small agency developing websites for non-profits in the greater Boston area. I learned the full stack during my time there - how to make a great website from pitch meeting to final deploy. Everything from setting up a Linux server to replicating a complex layout in CSS Grid to writing custom form validation in JavaScript. I made meaningful connections with wonderful clients (teachers, librarians, authors, artists, nurses) and learned how to listen deeply to all of their concerns and aspirations.
        </p>
      </section>
    </SkillsStyles>
  )
}