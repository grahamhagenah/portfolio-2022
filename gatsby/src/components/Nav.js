import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Ztext from 'react-ztext'

const Logo = () => (
  <Ztext 
    depth='1.75rem'
    direction='both'
    event='pointer'
    eventRotation='25deg'
    eventDirection='default'
    fade={false}
    layers={30}
    perspective='700px'
  >
      <li className="logo">
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.56 78.79"><path d="M33.5 33.5H14.5C13.309 33.4921 12.1689 33.0155 11.3267 32.1733C10.4845 31.3311 10.0079 30.191 10 29V10H23.09C25.8509 10 28.4987 11.0968 30.451 13.049C32.4032 15.0013 33.5 17.6491 33.5 20.41V29H43.5V20.41C43.5 17.7297 42.9721 15.0757 41.9464 12.5994C40.9207 10.1232 39.4173 7.87319 37.522 5.97795C35.6268 4.08271 33.3768 2.57932 30.9006 1.55362C28.4243 0.52792 25.7703 0 23.09 0L0 0V29C0.00530103 32.8492 1.53879 36.5388 4.26341 39.2578C6.98803 41.9768 10.6808 43.5027 14.53 43.5H33.53V53.89C33.5247 57.8401 31.9532 61.6269 29.16 64.42C26.3669 67.2132 22.5801 68.7847 18.63 68.79H4.26341V78.79H18.6C25.2015 78.7821 31.5303 76.1561 36.1982 71.4882C40.8661 66.8203 43.4921 60.4915 43.5 53.89V43.5V39.5V33.5H33.5Z" fill=""/></svg></Link>
      </li>

  </Ztext>
)


const NavStyles = styled.nav`
  margin-bottom: 5rem;

  .logo {
    width: 35px;
  }

  span:first-child svg {
    fill: #1AA0BD;
  }

  span:not(:first-child) svg {
    filter: brightness(75%);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    list-style: none;

    > div {
        transform: scale(1);
        transition: 1s;

        :hover {
          transform: scale(1.6);
          transition: .1s;
        }

        :active {
          transform: scale(1.4);
          transition: .1s;
        }
    }
  }

  #nav-right {
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

  a {
    font-size: 1.75rem;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
      <Logo />
      </ul>
    </NavStyles>
  )
}