import clsx from 'clsx';
import { FC } from 'react';

import { SkillIcon } from '@/components';

interface IIconListProps {
  icons: Array<string>;
  variant?: 'small' | 'base';
}

const IconList: FC<IIconListProps> = ({ icons, variant = 'base' }) => {
  return (
    <ul
      className={clsx(
        'flex flex-row',
        variant === 'small'
          ? 'gap-3'
          : 'justify-between w-full md:gap-10 gap-2',
      )}
    >
      {icons.map((icon) => (
        <li key={icon}>
          <SkillIcon icon={icon} variant={variant} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
