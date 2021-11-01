import {
  StyledHeader,
  HeaderHeading1,
  HeaderHeading2,
  HeaderParagraph,
} from './HeaderStyles';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderHeading1>
        Reliable, efficient delivery <span>Powered by Technology</span>{' '}
      </HeaderHeading1>
      <HeaderParagraph>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </HeaderParagraph>
    </StyledHeader>
  );
};

export default Header;
