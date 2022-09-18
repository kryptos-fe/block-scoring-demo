import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

export const NavItem = ({ icon, tag = '', children, ...rest }) => {
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
        <Box textAlign={'center'} sx={{ cursor: 'pointer' }} width={'14px'} height={'14px'} position={'relative'}>
          {/*<Image src={icon} layout="fill" objectPosition="center" objectFit={'cover'} alt="" />*/}
          <Icon
            as={icon}
            sx={{
              cursor: 'pointer',
            }}
            width={'14px'}
            height={'14px'}
            display={{ base: 'none', lg: 'block' }}
          />
        </Box>
        {children}
      </Flex>
    </Link>
  );
};
