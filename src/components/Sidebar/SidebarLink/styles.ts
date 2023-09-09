import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const Wrapper = styled(NavLink)`
  display: flex;
  gap: 15px;
  padding: 16px;
  align-items: center;
  text-decoration: none;
  color: #595D66;

  &.active {
    background-color: #03286A;
    color: white;
  }

`
export const Name = styled.p`
  text-decoration: none;
`