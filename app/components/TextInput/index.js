/**
 *
 * TextInput Component
 *
 */

import styled from 'styled-components';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding-left: 5px;
  border-bottom: 1px solid black;
`;

export default TextInput;
