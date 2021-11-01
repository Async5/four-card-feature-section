import { StyledCardContainer } from './CardContainerStyles';

import Card from './Card/Card';

import iconSupervisor from '../../images/icon-supervisor.svg';
import iconKarma from '../../images/icon-karma.svg';
import iconCalculator from '../../images/icon-calculator.svg';
import iconTeam from '../../images/icon-team-builder.svg';

const CardContainer = () => {
  return (
    <StyledCardContainer>
      <Card
        color="cyan"
        heading="Supervisor"
        paragraph="Monitors activity to identify project roadblocks"
        icon={iconSupervisor}
      />
      <div>
        <Card
          color="red"
          heading="Team Builder"
          paragraph="Scans our talent network to create the optimal team for your project"
          icon={iconTeam}
        />
        <Card
          color="orange"
          heading="Karma"
          paragraph="Regularly evaluates our talent to ensure quality"
          icon={iconKarma}
        />
      </div>

      <Card
        color="blue"
        heading="Calculator"
        paragraph="Uses data from past projects to provide better delivery estimates"
        icon={iconCalculator}
      />
    </StyledCardContainer>
  );
};

export default CardContainer;
