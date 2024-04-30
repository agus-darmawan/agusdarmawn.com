import clsx from 'clsx';
import { FC } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';

interface IHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: FC<IHamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={clsx(
        'text-white h-10 p-2 rounded-full',
        'hover:bg-slate-400/20 md:hidden ',
      )}
      onClick={onClick}
    >
      {isOpen ? <FaX size={20} /> : <FaBars size={20} />}
    </button>
  );
};

export default Hamburger;
