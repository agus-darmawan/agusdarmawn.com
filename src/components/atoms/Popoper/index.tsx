import clsx from 'clsx';
import { FC } from 'react';

interface IPopoperProps {
  text: string;
  show: boolean;
}

const Popoper: FC<IPopoperProps> = ({ text, show }) => {
  return (
    <div
      className={clsx(
        'bg-gray-600 text-xs  md:text-base rounded-xl',
        show ? 'block' : 'hidden',
      )}
    >
      <p className='p-2'>{text}</p>
    </div>
  );
};

export default Popoper;
