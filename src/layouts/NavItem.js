import { Flex, Link } from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';
import React from 'react';

export const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        role='group'
        cursor='pointer'
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
        <CustomImage width={'14px'} height={'14px'} isFill src={icon} />
        {children}
      </Flex>
    </Link>
  );
};
