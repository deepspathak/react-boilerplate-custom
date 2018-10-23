/**
 *
 * Nav Component
 *
 */

import styled from 'styled-components';

const Nav = styled.nav`
  margin: auto;
  ul {
    padding-left: 0;
    display: flex;
    li {
      + li {
        margin-left: 20px;
      }
      a {
        color: black;
        &:visited {
          color: black;
        }
      }
    }
  }
`;

export default Nav;
