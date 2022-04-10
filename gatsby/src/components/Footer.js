import React from 'react'
import styled from 'styled-components';

const FooterStyles = styled.footer`

  footer {
    margin-top: 175px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;

    li {
      &:nth-child(2):before,
      &:nth-child(3):before,
      &:nth-child(4):before {
        content: "/";
        padding: 0 15px;
        opacity: .25;
      }
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    color: #9b9b9b;
    margin: 30px 0;
  }
`;


export default function Footer() {
  return (
    <FooterStyles>
      <footer>
        <ul>
          <li>
            <a href="mailto:gwhagenah@gmail.com" rel="noreferrer" target="_blank">Email</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hagenah/" rel="noreferrer" target="_blank">LinkedIn</a> 
          </li>
          <li>
            <a href="/wp-content/uploads/2020/11/Graham-Hagenahs-Resume.pdf" rel="noreferrer" target="_blank">Resume</a>
          </li>
          <li>
            <a href="https://github.com/grahamhagenah/portfolio" rel="noreferrer" target="_blank">Source</a>
          </li>
        </ul>
        <p>Graham Hagenah © {(new Date().getFullYear())}</p>
      </footer>
    </FooterStyles>
  )
}