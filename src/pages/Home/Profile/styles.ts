import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProfileBio = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const ProfileBioTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    flex: 1;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }

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

export const ProfileInfo = styled.div`
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
