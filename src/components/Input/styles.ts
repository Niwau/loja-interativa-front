import styled from "styled-components";

export const Wrapper = styled.input`
  background-color: ${p => p.disabled ? '#E8E4E4' : 'transparent' };
  outline: none;
  border: 1px solid #D0D7DD;
  border-radius: 4px;
  padding: 12px;
`