import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
  margin-top: 8.3rem;
`;

export const HeaderHeading1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 200;
  color: ${props => props.theme.veryDarkBlue};
  line-height: 150%;

  @media ${props => props.theme.md} {
    font-size: 3.8rem;
    line-height: 140%;
    width: 70%;
    margin: 0 auto;
  }

  @media ${props => props.theme.lg} {
    width: 50%;
  }

  span {
    font-weight: 600;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.grayishBlue};
  font-weight: 400;
  line-height: 160%;

  @media ${props => props.theme.md} {
    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @media ${props => props.theme.lg} {
    width: 46%;
  }
`;
