import clsx from 'clsx';
import { FC } from 'react';

import { GradientText } from '@/components/atoms';

interface IMyStatisticsProps {}

const MyStatistics: FC<IMyStatisticsProps> = () => {
  const startData = [
    {
      number: '3+',
      desc: 'Year Experience in Programming',
    },
    {
      number: '6+',
      desc: 'Work Experience',
    },
    {
      number: '15+',
      desc: 'Projects completed',
    },
  ];
  return (
    <section
      className='px-10 md:px-20 lg:px-40 lg:pt-20 md:pt-10 pt-8'
      title='my-statistics'
    >
      <ul className='grid grid-cols-3 gap-2 lg:gap-8'>
        {startData.map(({ number, desc }, index) => (
          <li
            key={index}
            className={clsx(
              'text-center',
              index === 1 ? 'md:border-x-2 border-violet-500/20' : 'border-0',
            )}
          >
            <h2
              className={clsx(
                'lg:text-5xl md:text-4xl text-2xl px-2',
                'font-semibold text-violet-500',
              )}
            >
              <GradientText>{number}</GradientText>
            </h2>
            <p className='md:text-xl text-xs lg:text-2xl'>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyStatistics;
