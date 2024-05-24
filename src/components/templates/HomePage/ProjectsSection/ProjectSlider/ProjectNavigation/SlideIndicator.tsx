import { FC } from 'react';

interface SlideIndicatorsProps {
  totalSlides: number;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const SlideIndicators: FC<SlideIndicatorsProps> = ({
  totalSlides,
  activeSlide,
  setActiveSlide,
}) => {
  return (
    <div className='flex gap-2 items-center'>
      {[...Array(totalSlides)].map((_, index) => (
        <button
          onClick={() => setActiveSlide(index)}
          key={index}
          className={`h-3 w-3 rounded-full ${index === activeSlide ? 'bg-blue-500' : 'bg-blue-100'}`}
        ></button>
      ))}
    </div>
  );
};

export default SlideIndicators;
