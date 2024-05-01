import clsx from 'clsx';
import { FC } from 'react';

interface ITabsHeadProps {
  tabs: string[];
  activeTab: string;
  onClick: (tab: string) => void;
}

const TabsHead: FC<ITabsHeadProps> = ({ tabs, activeTab, onClick }) => {
  return (
    <ul className='flex mx-auto md:gap-10 gap-3 py-3'>
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={clsx(
            tab === activeTab ? 'text-violet-500 ' : 'text-zinc-100',
            'cursor-pointer md:text-lg text-xs hover:text-violet-400',
          )}
          onClick={() => onClick(tab)}
        >
          {tab}
          <div
            className={
              tab === activeTab ? 'bg-violet-500 h-0.5 w-[70%] mx-auto' : ''
            }
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default TabsHead;
