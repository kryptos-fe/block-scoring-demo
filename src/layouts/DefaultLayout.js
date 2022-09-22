import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { SidebarContent } from '@/layouts/SidebarContent';
import { MobileNav } from '@/layouts/MobileNav';
import { Footer } from '@/layouts/Footer.js';

export const DefaultLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box minH="100vh" display={'flex'} flexDirection={'column'}>
      <SidebarContent
        onClose={() => setMobileOpen(false)}
        display={{ base: mobileOpen ? 'block' : 'none', lg: isOpen ? 'block' : 'none' }}
      />
      <MobileNav
        onToggle={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        onMobileToggle={() => setMobileOpen(!setMobileOpen())}
      />
      <Box flex={1} ml={{ base: 0, lg: isOpen ? 60 : 0 }} p={{ base: 2, md: 4 }} bg={'themeBackground'} minH={'100%'}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};
