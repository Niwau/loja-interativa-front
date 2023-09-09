import * as S from './styles'
import { forwardRef } from 'react'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export const Input = forwardRef<InputProps, any>((props, ref) => {
  return (
    <S.Wrapper {...props} ref={ref}/>
  )
})