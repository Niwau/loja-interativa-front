import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`

export const Grid = styled.main`
  display: grid;
  grid-template-columns: 200px calc(100% - 200px);
`