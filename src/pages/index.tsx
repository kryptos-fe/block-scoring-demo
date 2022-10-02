import React, { useCallback, useEffect } from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout.js';
import { Box, Grid } from '@chakra-ui/react';

import { CardToken, Token } from '@/modules/Home/components/CardToken';
import HomeHeader from '@/modules/Home/components/HomeHeader';
import BreakContent from '@/modules/Home/components/BreakContent';
import { useQuery } from '@tanstack/react-query';
import Axios from '@/services/axios';
import { coins } from '@/config/coins';

const HomePage = () => {
  const getOverview = useCallback(async () => {
    const result = await Axios.Get('/forward', {
      url: 'https://scoring.trainery.live/v2/ratings',
    });
    return result;
  }, []);

  const { data } = useQuery(['overview'], getOverview);

  const tokenList: Array<Token> =
    data?.data?.data?.map((token: Token, index: number) => ({
      ...token,
      image: coins[index].image,
      tokenName: coins[index].name,
      rank: index + 1,
    })) || [];

  const firstList: Array<Token> = tokenList?.slice(0, 8) || [];
  const secondList: Array<Token> = tokenList?.slice(8) || [];

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
        {firstList?.map((token) => {
          return <CardToken token={token} key={token.id} />;
        })}
      </Grid>
      <BreakContent />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={4}
        p={4}
        bg={'header'}>
        {secondList?.map((token) => {
          return <CardToken key={token.id} token={token} />;
        })}
      </Grid>
    </Box>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;
