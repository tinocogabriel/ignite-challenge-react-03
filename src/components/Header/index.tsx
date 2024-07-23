import { HeaderContainer } from './styles'
import logomarca from '../../assets/githubblog-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logomarca} alt="" />
    </HeaderContainer>
  )
}
