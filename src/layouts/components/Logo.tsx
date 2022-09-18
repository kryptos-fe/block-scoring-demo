import { icons } from '@/constants';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

function Logo() {
  return (
    <Box sx={{ cursor: 'pointer' }} width={35} height={35} position={'relative'}>
      <Image src={icons.logo} layout="fill" objectPosition="center" objectFit={'cover'} alt="" />
    </Box>
  );
}

export default Logo;
