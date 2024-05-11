'use client';
import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

import { cn } from '@/lib/cn';

interface INextImageProps extends ImageProps {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width: number;
  height: number;
}

const NextImage: FC<INextImageProps> = ({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  blurClassName,
  ...rest
}) => {
  const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete');

  return (
    <figure className={className}>
      <Image
        className={cn(
          imgClassName,
          status === 'loading' &&
            cn('animate-pulse bg-gray-400 text-gray-400', blurClassName),
        )}
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={() => setStatus('complete')}
        {...rest}
      />
    </figure>
  );
};

export default NextImage;
