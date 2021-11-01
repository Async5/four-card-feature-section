import styled from 'styled-components';
import Link from 'next/link';

export const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
`;

export const FooterParagraph = styled.p`
  font-size: 11px;
  text-align: center;
`;

export const FooterLink = styled(Link)`
  color: hsl(228, 45%, 44%);
`;
