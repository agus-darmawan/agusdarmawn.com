import { ComponentPropsWithoutRef, FC } from 'react';

const H3: FC<ComponentPropsWithoutRef<'h2'>> = ({ children, id }) => {
  return (
    <h3 className='' id={id}>
      {children}
    </h3>
  );
};

export default H3;
