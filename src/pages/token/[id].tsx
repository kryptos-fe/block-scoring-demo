import React, { useEffect, useState } from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout.js';
import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { Info } from '@/modules/Token/Info';
import { GithubChart } from '@/modules/Token/GithubChart.js';
import { TokenChart } from '@/modules/Token/TokenChart';
import { GoogleTrends } from '@/modules/Token/GoogleTrends.js';
import { Statistics } from '@/modules/Token/Statistics.js';
import { BestBuy } from '@/modules/Token/BestBuy.js';
import NewImage from '@/components/NewImage';
import Axios from '@/services/axios';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Token } from '@/modules/Home/components/CardToken';
import { coins } from '@/config/coins';
import { getRandomInt } from '@/utils';

const TokenPage = () => {
  const router = useRouter();

  const getDetail = async () => {
    const result = await Axios.Get('/forward', {
      url: `https://scoring.trainery.live/v2/rating/${id}`,
    });
    return result;
  };

  const { id } = router.query;
  const { data } = useQuery(['detail', id], getDetail);
  const tokenData = data?.data || {};

  const index: number = Number(id) - 1;
  const coin = coins[index];

  const token: Token = {
    ...coin,
    id: index.toString(),
    techRating: {
      score: Math.floor(Math.random() * 100),
    },
    socialRating: {
      score: Math.floor(Math.random() * 100),
    },
    investorRating: {
      score: Math.floor(Math.random() * 100),
    },
  };

  token.tokenName = token.name;

  console.log('Token', token);

  const image = token?.image || '';

  console.log('image', image);

  const [progress, setProgress] = useState<{ title: string; progress: number }[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    const dataProgress: { title: string; progress: number }[] = [
      { title: 'Marketing & PR', progress: getRandomInt(10, 100) },
      {
        title: 'Partnerships',
        progress: getRandomInt(10, 100),
      },
      { title: 'Uniqueness', progress: getRandomInt(70, 100) },
    ];
    setProgress(dataProgress);
  }, []);
  return (
    <Box>
      <Box textAlign={'center'} p={{ base: 2, md: 4 }}>
        <Text color={'white'} fontSize={'lg'}>
          {token.tokenName} Review & Analysis
        </Text>
        <Text color={'blue'} fontSize={'sm'}>
          Bringing human & machine intelligence for impartial crypto analysis.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
        gap={{ base: 2, md: 4 }}
        pt={14}>
        <Info token={token} />
        <GithubChart />
      </Grid>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
        gap={{ base: 2, md: 4 }}
        mt={5}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Grid
            bg={'mainBackground'}
            templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
            gap={4}
            w={'100%'}>
            {progress &&
              progress.map((item, index) => {
                return (
                  <GridItem
                    key={index}
                    h={112}
                    display={'flex'}
                    flexDirection={'column'}
                    p={4}
                    justifyContent={'space-between'}>
                    <Text color={'white'} fontWeight={'bold'} fontSize={14}>
                      {item.progress}%
                    </Text>
                    <Divider opacity={0.15} />
                    <Flex justifyContent={'space-between'}>
                      <Text color={'secondary'} fontSize={14} fontWeight={'bold'}>
                        {item.title}
                      </Text>
                      {image?.length > 0 ? <NewImage src={image} width={15} height={15} /> : null}
                    </Flex>
                  </GridItem>
                );
              })}
          </Grid>
          <TokenChart setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} token={token} />
        </GridItem>
        <GridItem colSpan={1} display={'flex'} flexDirection={'column'}>
          <GoogleTrends />
          <Statistics minPrice={minPrice} maxPrice={maxPrice} />
          <BestBuy />
        </GridItem>
      </Grid>
    </Box>
  );
};
TokenPage.Layout = DefaultLayout;

export default TokenPage;
