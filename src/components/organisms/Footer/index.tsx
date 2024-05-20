import clsx from 'clsx';
import { FC } from 'react';

import { FeedbackFish, Links } from '@/components';

import { footerlinks, sociallinks } from './links';

const Footer: FC = () => {
  return (
    <footer className='border-t layout border-gray-700 text-center'>
      <nav title='footer-nav'>
        <ul
          className={clsx(
            'flex flex-row flex-wrap justify-center items-center ',
            'md:gap-x-10 gap-x-5  gap-y-1 pt-4',
          )}
        >
          {footerlinks.map(({ label, href }, index) => (
            <Links href={href} className=' md:text-base text-sm' key={index}>
              {label}
            </Links>
          ))}
        </ul>
        <h2 className=' md:text-lg pt-5 md:pt-12 pb-2'>Reach me out</h2>
        <ul className='flex flex-row gap-5 justify-center'>
          {sociallinks.map(({ icon, href }, index) => (
            <Links href={href} key={index}>
              {icon}
            </Links>
          ))}
        </ul>
        <section className='flex gap-2 justify-center text-center py-5 md:py-8 text-sm md:text-base'>
          <h3>© Agus Darmawan {new Date().getFullYear()} • </h3>
          <FeedbackFish />
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
