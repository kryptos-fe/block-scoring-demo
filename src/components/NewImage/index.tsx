import { icons } from '@/constants';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface NewImageProps {
  width: number;
  height: number;
  src: string;
}

function NewImage({ width, height, src }: NewImageProps) {
  return (
    <Box sx={{ cursor: 'pointer' }} width={width} height={height} position={'relative'}>
      <Image src={src} layout="fill" objectPosition="center" objectFit={'cover'} alt="" />
    </Box>
  );
}

export default NewImage;
