import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
      line-height: 1.6;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  input {
    border-radius: 6px;
    padding: 1rem 0.75rem;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    line-height: 1.6;
    color: ${({ theme }) => theme['base-label']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
