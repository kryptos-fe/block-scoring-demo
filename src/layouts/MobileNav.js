import { Avatar, Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react';
import { HamburgerIcon, RepeatIcon, SearchIcon } from '@chakra-ui/icons';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';
import React from 'react';

export const MobileNav = ({ isOpen, onToggle, onMobileToggle, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, lg: isOpen ? 60 : 0 }}
      px={{ base: 4, lg: 4 }}
      height="16"
      alignItems="center"
      bg={'header'}
      justifyContent={'space-between'}
      {...rest}>
      <Flex
        alignItems={'center'}
        sx={{
          flex: 1,
        }}>
        <HamburgerIcon
          sx={{
            cursor: 'pointer',
            marginRight: '20px',
          }}
          onClick={onToggle}
          display={{ base: 'none', lg: 'block' }}
        />
        <HamburgerIcon
          sx={{
            cursor: 'pointer',
            marginRight: '20px',
          }}
          onClick={onMobileToggle}
          display={{ base: 'block', lg: 'none' }}
        />

        <Box pos={'relative'} h={34} width={512}>
          <Input placeholder="Search (e.g bitcoin)" width={'100%'} height={'100%'} variant={'search'} />
          <SearchIcon
            sx={{
              width: 4,
              height: 4,
              position: 'absolute',
              right: 2.5,
              top: 2.5,
            }}
          />
        </Box>
      </Flex>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" />
        <HStack spacing={4} alignItems={'center'}>
          <CustomImage width={'14px'} height={'14px'} isFill src={icons.dashboard} />
          <RepeatIcon />
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </HStack>
      </HStack>
    </Flex>
  );
};
