import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

import { Link } from '@/components';

interface ITOCLinkProps extends ComponentPropsWithoutRef<'a'> {
  text: string;
  level: number;
  minLevel: number;
  activeHeading: string;
}

const TOCLinks: FC<ITOCLinkProps> = ({
  id,
  text,
  level,
  minLevel,
  activeHeading,
  className,
  ...rest
}) => {
  return (
    <Link
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        className,
        activeHeading == id ? 'text-blue-500' : 'text-gray-400',
      )}
      {...rest}
      style={{ paddingLeft: (level - minLevel) * 20 }}
    >
      {text}
    </Link>
  );
};

export default TOCLinks;
