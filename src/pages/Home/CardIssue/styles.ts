import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 26rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: ${({ theme }) => theme['base-post']};
  padding: 2rem;

  border-radius: 10px;
  border: 1px solid transparent;
  max-height: 16.25rem;

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme['base-label']};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      flex-wrap: wrap;
      max-width: 15rem;
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-title']};
    }

    timer {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  > span {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};

    width: 100%; /* Define a largura máxima da div */

    overflow: hidden; /* Esconde o texto excedente */
    display: -webkit-box; /* Define como um contêiner flexível (em WebKit) */
    -webkit-box-orient: vertical; /* Define a orientação da caixa como vertical */
    -webkit-line-clamp: 4; /* Número máximo de linhas a serem exibidas */
    line-clamp: 4; /* Usado para compatibilidade com propriedades futuras */
    text-overflow: ellipsis; /* Adiciona reticências ao final do texto truncado */
  }
`
