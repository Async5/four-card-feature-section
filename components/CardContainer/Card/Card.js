/* eslint-disable @next/next/no-img-element */
import {
  StyledCard,
  CardHeading,
  CardParagraph,
  CardImage,
} from './CardStyles';

const Card = ({ icon, heading, paragraph, color }) => {
  return (
    <StyledCard color={color}>
      <div>
        <CardHeading>{heading}</CardHeading>
        <CardParagraph>{paragraph}</CardParagraph>
      </div>
      <CardImage>
        <img src={icon} alt="icon" />
      </CardImage>
    </StyledCard>
  );
};

export default Card;
