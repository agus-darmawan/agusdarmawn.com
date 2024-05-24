import { FC } from 'react';

import NavigationButtons from './NavigationButtons';
import SlideIndicators from './SlideIndicators';

interface ProjectNavigationProps {
  totalSlides: number;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const ProjectNavigation: FC<ProjectNavigationProps> = ({
  totalSlides,
  activeSlide,
  setActiveSlide,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className='flex justify-between'>
      <SlideIndicators
        totalSlides={totalSlides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default ProjectNavigation;
