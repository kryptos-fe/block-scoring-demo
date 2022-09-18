import React from 'react';
import { useRouter } from 'next/router.js';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { icons } from '@/constants/index.js';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { NavItem } from '@/layouts/NavItem.js';
import Logo from '@/layouts/components/Logo';

const MainMenu = [
  { name: 'Blockscoring Rated', icon: icons.dashboard },
  { name: 'Hot Cryptos', icon: icons.logo },
  { name: 'Cryptos Portfolio', icon: icons.logo },
  { name: 'Investment', icon: icons.logo },
  { name: 'Bookmarks', icon: icons.logo },
  { name: 'Highlight', icon: icons.logo },
  { name: 'Methodology', icon: icons.logo },
];

const SubMenu = [
  { name: 'Submit Project', icon: icons.dashboard },
  { name: 'About Blockscoring', icon: icons.logo },
  { name: 'APIs', icon: icons.logo },
  { name: 'Help & Support', icon: icons.logo },
  { name: 'Donate', icon: icons.logo },
];

interface SidebarProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box
      transition="display 3s"
      bg={'sidebarBackground'}
      w={{ base: '100%', lg: 60 }}
      pos="fixed"
      zIndex={1000}
      h="full"
      {...rest}>
      <Box w={'100%'} h={'100%'} pos={'relative'}>
        <Flex
          h="16"
          cursor={'pointer'}
          alignItems="center"
          mx="8"
          justifyContent="center"
          onClick={() => router.push('/')}>
          <Logo />
          <Text ml={'5px'} fontSize="lg" fontWeight="bold" color={'white'}>
            Blockscoring
          </Text>
        </Flex>
        <Divider />
        <Text
          color={'white'}
          fontSize={12}
          opacity={0.5}
          sx={{
            padding: '10px 25px 10px 15px',
          }}>
          Main
        </Text>
        {MainMenu.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            <Text ml={2.5} color={'#ffffffa6'} fontSize={14}>
              {link.name}
            </Text>
          </NavItem>
        ))}
        <Text
          color={'white'}
          fontSize={12}
          opacity={0.5}
          sx={{
            padding: '10px 25px 10px 15px',
          }}>
          Sub
        </Text>
        {SubMenu.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            <Text ml={2.5} color={'white'} fontSize={14}>
              {link.name}
            </Text>
          </NavItem>
        ))}
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          pos={'absolute'}
          w={10}
          h={10}
          bottom={2}
          left={'50%'}
          onClick={onClose}
          display={{ base: 'block', md: 'none' }}
          ml={-3}>
          <SmallCloseIcon w={8} h={8} />
        </Flex>
      </Box>
    </Box>
  );
};
