import styled from 'styled-components';

export const StyledCard = styled.div`
  border-top: 3px solid
    ${props =>
      props.color === 'cyan'
        ? props.theme.cyan
        : props.color === 'red'
        ? props.theme.redCyan
        : props.color === 'orange'
        ? props.theme.orange
        : props.color === 'blue'
        ? props.theme.blue
        : ''};

  border-radius: 0.7rem;
  max-width: 35rem;
  min-height: 22rem;
  width: 100%;
  padding: 2.5rem;
  box-shadow: #e1eaf3 0px 7px 29px 0px;
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${props => props.theme.xl} {
    min-height: 25rem;
  }
`;

export const CardHeading = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.veryDarkBlue};
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

export const CardParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.grayishBlue};
  line-height: 160%;
`;

export const CardImage = styled.div`
  text-align: right;
`;
