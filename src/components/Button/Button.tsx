import React from "react";
import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  variant?: 'outlined' | 'solid';
  children: React.ReactNode
}

export const Button = ({ icon, variant, children, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest}>
      <img/>
      {children}
    </S.Wrapper>
  )
}