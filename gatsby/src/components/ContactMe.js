import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const ContactMeStyles = styled.div`

  p {
    margin: 0;
  }

  .callout {
    margin: 0;
    text-align: left;
    background-color: #e0eaf1;
    border-radius: 5px;
    display: block;
    padding: 10px 10px 10px 20px;
    justify-content: space-between;
    display: flex;
    line-height: 2;
    margin: 100px 0 175px 0;

      button {
        display: block;
        color: black;
        text-decoration: none;
        background: #fff;
        border: 2px solid #e0eaf1;
        border-radius: 5px;
        padding: 5px 20px;

        &:hover {
          background: #e0eaf1;
          border: 2px solid #fff;
        }
      }
    }
  }
`;

export default function ContactMe( {boldText, text, buttonText} ) {
  return (
    <ContactMeStyles>
      <div className="callout">
        <p><strong>{boldText}</strong> {text}</p><Link to="/contact"><button>{buttonText}</button></Link>
      </div>
    </ContactMeStyles>
  )
}