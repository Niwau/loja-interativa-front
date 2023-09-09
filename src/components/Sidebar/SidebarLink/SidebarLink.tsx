import * as S from './styles'

interface SidebarLinkProps {
  to: string;
  icon: string;
  name: string;
}

export const SidebarLink = ({ to, icon, name }: SidebarLinkProps) => {
  return (
    <S.Wrapper to={to}>
      <img src={icon}/>
      <S.Name>{name}</S.Name>
    </S.Wrapper>
  )
}