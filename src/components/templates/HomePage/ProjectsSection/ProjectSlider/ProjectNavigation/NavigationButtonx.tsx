import { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, ariaLabel, children }) => (
  <button
    onClick={onClick}
    className='h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-black'
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
    <div className='flex gap-3'>
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
