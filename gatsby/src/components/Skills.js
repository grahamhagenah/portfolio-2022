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

  .skills-grid {
    margin: 10rem 0;
  }

  .skills-grid li:nth-child(1) {
    background-color: #e8940038;
  }

  .skills-grid li:nth-child(2) {
    background-color: #d0331438;
  }

  .skills-grid li:nth-child(3) {
    background-color: #8ed01438;
  }

  .skills-grid li:nth-child(4) {
    background-color: #14d0a338;
  }

  .skills-grid li:nth-child(5) {
    background-color: #1420d038;
  }

  .skills-grid li:nth-child(6) {
    background-color: #b414d038;
  }

  .skills-grid li:nth-child(7) {
    background-color: #e0eaf1;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  .skills-grid li:hover {
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
      max-width: 250px;
    }
  }

`;


export default function Skills(props) {

  let stack = props.stack

  if(stack == undefined) {
    stack = [];
  }
    
  return (
    <SkillsStyles>
        <ul className="skills-grid">
          { (stack.includes('HTML') || props.showAll) && <SkillHtml /> }
          { (stack.includes('CSS') || props.showAll) && <SkillCss /> }
          { (stack.includes('JavaScript') || props.showAll) && <SkillJs /> }
          { (stack.includes('React') || props.showAll) && <SkillReact /> }
          { (stack.includes('PHP & MySQL') || props.showAll) && <SkillPhp /> }
          { (stack.includes('WordPress') || props.showAll) && <SkillWordpress /> }
          { (stack.includes('Accessibility') || props.showAll) && <SkillA11y /> }
        </ul>
    </SkillsStyles>
  )
}

function SkillHtml() {
  return (
    <li data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease" data-sal-duration="1000"><FaHtml5 />HTML</li>
  )
}

function SkillCss() {
  return (
    <li data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease" data-sal-duration="1000"><FaCss3Alt />CSS</li>
  )
}

function SkillJs() {
  return (
    <li data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000"><SiJavascript />JavaScript</li>
  )
}

function SkillReact() {
  return (
    <li data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease" data-sal-duration="1000"><FaReact />React</li>
  )
}

function SkillPhp() {
  return (
    <li data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000"><FaDatabase />PHP & MySQL</li>
  )
}

function SkillWordpress() {
  return (
    <li data-sal="slide-up" data-sal-delay="350" data-sal-easing="ease" data-sal-duration="1000"><FaWordpress />WordPress</li>
  )
}

function SkillA11y() {
  return (
    <li data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease" data-sal-duration="1000"><FaUniversalAccess />Accessibility</li>
  )
}