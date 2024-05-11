'use client';
import { FeedbackFish as FeedbackFishReact } from '@feedback-fish/react';
import { FC } from 'react';

const FeedbackFish: FC = () => {
  return (
    <FeedbackFishReact
      projectId={String(process.env.NEXT_PUBLIC_FEEDBACKFISH_PROJECTID)}
    >
      <h3 className='text-white  cursor-pointer hover:text-violet-400'>
        Send Feedback
      </h3>
    </FeedbackFishReact>
  );
};

export default FeedbackFish;
