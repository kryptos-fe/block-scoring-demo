import React from 'react';
import Image from 'next/image';
import { Box, Flex, Link } from '@chakra-ui/react';

export const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        role="group"
        cursor="pointer"
        h={'42px'}
        _hover={{
          color: 'white',
          background: 'rgba(255, 255, 255, 0.15)',
          borderLeft: '1px solid white',
        }}
        sx={{
          padding: '9px 5px 9px 15px',
        }}
        {...rest}>
        <Box sx={{ cursor: 'pointer' }} width={'14px'} height={'14px'} position={'relative'}>
          <Image src={icon} layout="fill" objectPosition="center" objectFit={'cover'} alt="" />
        </Box>
        {children}
      </Flex>
    </Link>
  );
};
