import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const NavStyles = styled.nav`
  margin-bottom: 5rem;

  #logo {
    height: 35px;
    fill: rgb(46, 46, 46);
    transform: scale(1);
    transition: .5s;
    
  }

  #logo:hover {
    transform: scale(1.25);
    transition: .2s;
  }

  #logo:active {
    transform: scale(1.1);
    transition: .25s;
  }

  .sticky {
    
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
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/">
        <svg id="logo" viewBox="0 0 1422 2251">
          <path d="M0.5 2250V1881H185H936.701C1000.49 1881 1052.2 1829.29 1052.2 1765.5L1052.21 485.23C1052.21 421.441 1000.5 369.73 936.714 369.73H370.554H370.055L370.054 370.229L369.513 752.229L369.513 752.321C369.562 816.068 421.255 867.73 485.013 867.73H936.214V1236.73H485.013C217.431 1236.73 0.513168 1019.81 0.513184 752.23V752.115L0.513321 752.001L1.51272 0.50062L186.037 0.729715H186.038H936.714C1204.3 0.729715 1421.21 217.648 1421.21 485.23L1421.2 1765.5C1421.2 2033.08 1204.28 2250 936.701 2250H185H0.5Z"/>
        </svg>
      </Link>
    </NavStyles>
  )
}