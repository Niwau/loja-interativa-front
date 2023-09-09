import { SidebarLink } from './SidebarLink/SidebarLink'
import categoriesIcon from '../../assets/categories-icon.svg'
import productsIcon from '../../assets/products-icon.svg'

import * as S from './styles'

export const Sidebar = () => {
  return (
    <S.Wrapper>
      <SidebarLink name='Categorias' to='/categories' icon={categoriesIcon}/>
      <SidebarLink name='Produto' to='/products' icon={productsIcon}/>
    </S.Wrapper>
  )
}