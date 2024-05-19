import { ComponentPropsWithoutRef, FC } from 'react';

const H2: FC<ComponentPropsWithoutRef<'h2'>> = ({ children, id }) => {
  return (
    <h2 className='leading-relaxed text-3xl font-semibold mdx' id={id}>
      {children}
    </h2>
  );
};

export default H2;
