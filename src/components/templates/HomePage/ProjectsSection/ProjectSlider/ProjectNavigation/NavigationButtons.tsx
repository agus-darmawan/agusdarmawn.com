import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, ariaLabel, children }) => (
  <button
    onClick={onClick}
    className='lg:h-10 lg:w-10 h-8 w-8  bg-slate-200 rounded-full flex items-center justify-center text-black'
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

interface NavigationButtonsProps {
  handlePrev: () => void;
  handleNext: () => void;
}

const NavigationButtons: FC<NavigationButtonsProps> = ({
  handlePrev,
  handleNext,
}) => {
  return (
    <div className='flex lg:gap-3 gap-2'>
      <Button onClick={handlePrev} ariaLabel='Previous Slide'>
        &#10094;
      </Button>
      <Button onClick={handleNext} ariaLabel='Next Slide'>
        &#10095;
      </Button>
    </div>
  );
};

export default NavigationButtons;
