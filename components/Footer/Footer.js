import { StyledFooter, FooterParagraph, FooterLink } from './FooterStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterParagraph>
        Challenge by{' '}
        <FooterLink
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </FooterLink>
        . Coded by <a href="#">Emre Cakir</a>.
      </FooterParagraph>
    </StyledFooter>
  );
};

export default Footer;
