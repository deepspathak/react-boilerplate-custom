/**
 *
 * SubmitInput Component
 *
 */

import styled from 'styled-components';

const SubmitInput = styled.input.attrs({
  type: 'submit',
})`
  border: 1px solid black;
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default SubmitInput;
