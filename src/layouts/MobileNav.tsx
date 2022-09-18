import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Avatar, Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react';
import { HamburgerIcon, RepeatIcon, SearchIcon, Icon } from '@chakra-ui/icons';
import { images } from '@/constants/images';

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  onMobileToggle: () => void;
}

export const MobileNav = ({ isOpen, onToggle, onMobileToggle, ...rest }: HeaderProps) => {
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
        {/*<IconButton size="lg" variant="ghost" aria-label="open menu" />*/}
        <HStack spacing={4} alignItems={'center'}>
          <Icon
            as={AiFillHome}
            sx={{
              cursor: 'pointer',
            }}
            onClick={onToggle}
            display={{ base: 'none', lg: 'block' }}
          />
          <RepeatIcon />
          <Avatar
            size={'sm'}
            // @ts-ignore
            src={images.emptyProfile}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};
