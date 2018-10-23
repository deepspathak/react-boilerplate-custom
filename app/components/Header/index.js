/**
 *
 * Header Component
 *
 */
import styled from 'styled-components';
import { mobileOnly } from '../../utils/styleUtils';

const color = 'red';

const Header = styled.header`
  margin: 0 auto;
  width: 100%;
  p {
    text-align: center;
  }
  ${mobileOnly`
    p {
      color: ${color};
    }
  `}
`;

export default Header;
