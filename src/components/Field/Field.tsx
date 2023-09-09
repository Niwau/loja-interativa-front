import * as S from './styles'

interface FieldProps {
  children: React.ReactNode
}

export const Field = ({ children }: FieldProps) => {
  return (
    <S.Wrapper>
      { children }
    </S.Wrapper>
  )
}

Field.Label = S.Label