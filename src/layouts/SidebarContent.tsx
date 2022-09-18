import React from 'react';
import { useRouter } from 'next/router.js';
import { Box, Divider, Flex, Text, Badge } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { NavItem } from '@/layouts/NavItem.js';
import Logo from '@/layouts/components/Logo';
import {
  AiFillDatabase,
  AiTwotoneFire,
  AiFillPieChart,
  AiFillVideoCamera,
  AiTwotonePieChart,
  AiTwotoneFund,
  AiTwotoneBook,
  AiFillCalculator,
  AiFillContacts,
  AiFillSetting,
  AiFillMail,
  AiTwotoneWallet,
} from 'react-icons/ai';

const MainMenu = [
  { name: 'Blockscoring Rated', icon: AiFillDatabase },
  { name: 'Hot Cryptos', icon: AiTwotoneFire },
  { name: 'Cryptos Portfolio', icon: AiFillPieChart },
  { name: 'Investment', icon: AiTwotoneFund, tag: 'New' },
  { name: 'Bookmarks', icon: AiTwotoneBook },
  { name: 'Highlight', icon: AiFillVideoCamera },
  { name: 'Methodology', icon: AiFillCalculator },
];

const SubMenu = [
  { name: 'Submit Project', icon: AiTwotonePieChart, color: '#04b962' },
  { name: 'About Blockscoring', icon: AiFillContacts, color: '#14b6ff' },
  { name: 'APIs', icon: AiFillSetting, color: '#04b962' },
  { name: 'Help & Support', icon: AiFillMail, color: '#f43643' },
  { name: 'Donate', icon: AiTwotoneWallet, color: '#ff8800' },
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
          <NavItem key={link.name} icon={link.icon} color={null}>
            <Text ml={2.5} color={'white'} fontSize={14}>
              {link.name}
            </Text>
            {link?.tag ? (
              <Badge ml={'4px'} borderRadius={'4px'} colorScheme={'green'}>
                {link.tag}
              </Badge>
            ) : null}
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
          <NavItem key={link.name} icon={link.icon} color={link?.color}>
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
