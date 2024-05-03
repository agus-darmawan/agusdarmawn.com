'use client';
import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';

import { GradientText, TabsBody, TabsHead } from '@/components';

interface ITabsProps {
  title: string;
  tabs: { title: string; content: ReactNode }[];
}

const Tabs: FC<ITabsProps> = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={clsx(
        'mt-10 md:mt-20 lg:mt-10 ',
        'flex flex-col justify-center',
      )}
    >
      <h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-semibold'>
        <GradientText>{title}</GradientText>
      </h2>
      <TabsHead
        tabs={tabs.map((tab) => tab.title)}
        activeTab={activeTab}
        onClick={handleTabClick}
      />
      <TabsBody tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
