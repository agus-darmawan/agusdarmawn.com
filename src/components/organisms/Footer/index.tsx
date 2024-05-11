import { FC } from 'react';

import { FeedbackFish, Links } from '@/components';

import { footerlinks, sociallinks } from './links';

const Footer: FC = () => {
  return (
    <footer className='w-full bg-black border-t-2 border-gray-700 text-center layout'>
      <nav title='footer-nav'>
        <ul className='flex flex-row flex-wrap gap-x-10  gap-y-1 justify-center pt-8'>
          {footerlinks.map(({ label, href }, index) => (
            <Links
              href={href}
              className='text-white md:text-lg text-base'
              key={index}
            >
              {label}
            </Links>
          ))}
        </ul>
        <h2 className='text-white md:text-xl text-lg pt-12 pb-2'>
          Reach me out
        </h2>
        <ul className='flex flex-row gap-10 justify-center'>
          {sociallinks.map(({ icon, href }, index) => (
            <Links href={href} className='text-white' key={index}>
              {icon}
            </Links>
          ))}
        </ul>
        <section className='flex gap-2 justify-center py-9 text-sm md:text-base'>
          <h3>© Agus Darmawan {new Date().getFullYear()} </h3>
          <FeedbackFish />
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
