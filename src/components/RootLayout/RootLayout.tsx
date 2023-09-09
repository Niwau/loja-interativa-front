import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import * as S from './styles'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <S.Wrapper>
      <Header/>
      <S.Grid>
        <Sidebar/>
        <div style={{ margin: '30px' }}>
          <Outlet/>
        </div>
      </S.Grid>
    </S.Wrapper>
  )
}