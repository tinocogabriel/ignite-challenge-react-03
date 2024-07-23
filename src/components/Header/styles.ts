import styled from 'styled-components'
import headerCover from '../../assets/header-cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  padding-top: 4rem;
  display: flex;
  justify-content: center;

  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`
