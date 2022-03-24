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
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.56 78.79"><path d="M33.5,33.5h-19A4.53,4.53,0,0,1,10,29V10H23.09A10.41,10.41,0,0,1,33.5,20.41v10h10v-10A20.41,20.41,0,0,0,23.09,
 0H0V29A14.52,14.52,0,0,0,14.53,43.5h19V53.89a14.92,14.92,0,0,1-14.9,14.9H5.8l0,10H18.6a24.93,24.93,0,0,0,24.9-24.9V43.5H53.56v-10Z"></path> </svg></Link>
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
        <li>
          <ul id="nav-right">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </li>
      </ul>
    </NavStyles>
  )
}