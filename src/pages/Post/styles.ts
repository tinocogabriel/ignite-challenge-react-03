import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: -5.5rem auto 5.5rem auto;
`

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    flex: 1;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
    margin: 1.25rem 0 0.5rem 0;
  }
`

export const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }

    border-bottom: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    line-height: 1.6;
    font-size: 0.75rem;

    span {
      margin-top: 2px;
      font-weight: bold;
    }
  }
`

export const InfoDetails = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  img {
    max-width: 54rem;
  }
`
