import styled from 'styled-components';

export const StyledCardContainer = styled.section`
  display: grid;
  place-content: center;

  @media ${props => props.theme.md} {
    grid-template-columns: repeat(2, 35rem);
    grid-template-rows: repeat(2, 22rem);
    grid-gap: 2.5rem;
  }

  @media ${props => props.theme.xl} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
