import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { icons } from '@/constants/index.js';
import { SidebarContent } from '@/layouts/SidebarContent.js';
import { MobileNav } from '@/layouts/MobileNav.js';
import { Footer } from '@/layouts/Footer.js';

const LinkItems = [
  { name: 'Home', icon: icons.dashboard },
  { name: 'Trending', icon: icons.logo },
  { name: 'Explore', icon: icons.logo },
  { name: 'Favourites', icon: icons.logo },
  { name: 'Settings', icon: icons.logo },
];

export const DefaultLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box minH='100vh' display={'flex'} flexDirection={'column'}>
      <SidebarContent
        linkItems={LinkItems}
        onClose={() => setMobileOpen(false)}
        display={{ base: mobileOpen ? 'block' : 'none', lg: isOpen ? 'block' : 'none' }}
      />
      <MobileNav
        onToggle={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        onMobileToggle={() => setMobileOpen(!setMobileOpen())}
      />
      <Box flex={1} ml={{ base: 0, lg: isOpen ? 60 : 0 }} p={{ base: 2, md: 4 }}
           bg={'themeBackground'} minH={'100%'}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
