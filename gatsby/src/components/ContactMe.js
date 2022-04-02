import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const ContactMeStyles = styled.div`

  p {
    margin: 0;
    font-size: 17px;

    @media screen and (max-width: 700px) {
      display: block;
      margin-bottom: 2rem;
    }
  }

  strong {
    padding: 0 5px;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
    flex-flow: wrap;
    line-height: 2;
    margin: 10rem 0 15rem 0;
    background-size: 400% 400%;
    background: linear-gradient(-45deg, rgba(238, 119, 82, 0.1), rgba(231, 61, 127, 0.1), rgba(35, 166, 213, 0.1), rgba(35, 213, 171, 0.1));
    animation: gradientBG 15s ease infinite;

    @media screen and (max-width: 700px) {
      justify-content: center;
      text-align: center;
      padding: 3rem 1rem;
    }

      button {
        display: block;
        text-decoration: none;
        background: white;
        border: 1px solid var(--black);
        border-radius: 5px;
        padding: 5px 20px;
        height: 100%;
        font-weight: 500;

        @media screen and (max-width: 700px) {
          grid-template-columns: 1fr;
          gap: 0;
          display: block;
        }

        &:hover {
          background: var(--black);
          color: white;
          border: 1px solid #fff;
        }
      }
    }
  }
`;

export default function ContactMe( {boldText, text, buttonText} ) {
  return (
    <ContactMeStyles>
      <div className="callout">
        <p>{text} <strong>{boldText}</strong></p><Link to="/contact"><button>{buttonText}</button></Link>
      </div>
    </ContactMeStyles>
  )
}