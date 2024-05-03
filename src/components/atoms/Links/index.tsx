import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

interface ILinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Links: FC<ILinksProps> = ({ href, children, className, ...rest }) => {
  return (
    <Link href={String(href)} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default Links;
