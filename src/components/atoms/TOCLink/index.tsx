import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef, FC } from 'react';

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
        'hover:text-violet-600',
        activeHeading == id ? 'text-blue-500' : 'text-gray-400',
      )}
      {...rest}
      style={{ paddingLeft: (level - minLevel) * 20 }}
    >
      {text}
      <span className='sr-only text-blue-500'>{activeHeading}</span>
    </Link>
  );
};

export default TOCLinks;
