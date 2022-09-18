import React from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout.js';
import { Box, Grid } from '@chakra-ui/react';

import { CardToken } from '@/modules/Home/components/CardToken/index.js';
import HomeHeader from '@/modules/Home/components/HomeHeader';
import BreakContent from '@/modules/Home/components/BreakContent';

const HomePage = () => {
  return (
    <Box>
      <HomeHeader />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={{ base: 2, md: 4 }}
        p={{ base: 2, md: 4 }}
        bg={'header'}>
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
      </Grid>
      <BreakContent />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={4}
        p={4}
        bg={'header'}>
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
        <CardToken title={'Bitcoin'} rank={1} />
      </Grid>
    </Box>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;
