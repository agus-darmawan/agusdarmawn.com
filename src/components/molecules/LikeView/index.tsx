import { FC } from 'react';

interface LikeViewProps {
  views: number;
  likes: number;
}

const LikeView: FC<LikeViewProps> = ({ views, likes }) => {
  return (
    <div className='flex gap-2'>
      <h4>
        {views} View{views !== 1 && 's'}
      </h4>
      <h4>
        {likes} Like{likes !== 1 && 's'}
      </h4>
    </div>
  );
};

export default LikeView;
