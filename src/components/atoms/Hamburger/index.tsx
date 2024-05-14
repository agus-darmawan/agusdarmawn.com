import { CommonBurgerProps, Divide as HamburgerReact } from 'hamburger-react';
import { FC } from 'react';

interface IHamburgerProps extends CommonBurgerProps {
  className?: string;
}

const Hamburger: FC<IHamburgerProps> = ({ className, ...rest }) => {
  return (
    <button className={className}>
      <HamburgerReact {...rest} />
    </button>
  );
};

export default Hamburger;
