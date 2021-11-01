import { StyledCardContainer } from './CardContainerStyles';

import Card from './Card/Card';

const CardContainer = () => {
  return (
    <StyledCardContainer>
      <Card
        color="cyan"
        heading="Supervisor"
        paragraph="Monitors activity to identify project roadblocks"
        icon="/icon-supervisor.svg"
      />
      <div>
        <Card
          color="red"
          heading="Team Builder"
          paragraph="Scans our talent network to create the optimal team for your project"
          icon="/icon-team-builder.svg"
        />
        <Card
          color="orange"
          heading="Karma"
          paragraph="Regularly evaluates our talent to ensure quality"
          icon="/icon-karma.svg"
        />
      </div>

      <Card
        color="blue"
        heading="Calculator"
        paragraph="Uses data from past projects to provide better delivery estimates"
        icon="/icon-calculator.svg"
      />
    </StyledCardContainer>
  );
};

export default CardContainer;
