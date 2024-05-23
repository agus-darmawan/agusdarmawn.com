import { ComponentPropsWithoutRef } from 'react';

import Link from '../../Linkss';

const ButtonLink: React.FC<ComponentPropsWithoutRef<'a'>> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <Link href={href ?? '#'} className={className} {...rest}>
      <button type='button' className={className}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
