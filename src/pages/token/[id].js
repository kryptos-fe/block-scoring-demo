import React from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout.js';
import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { Info } from '@/modules/Token/Info.js';
import { GithubChart } from '@/modules/Token/GithubChart.js';
import CustomImage from '@/components/CustomImage';
import { icons } from '@/constants';
import { TokenChart } from '@/modules/Token/TokenChart';
import { GoogleTrends } from '@/modules/Token/GoogleTrends.js';
import { Statistics } from '@/modules/Token/Statistics.js';
import { BestBuy } from '@/modules/Token/BestBuy.js';

const TokenPage = () => {
  return (
    <Box>
      <Box textAlign={'center'} p={{ base: 2, md: 4 }}>
        <Text color={'white'} fontSize={'lg'}>
          Bitcoin Review & Analysis
        </Text>
        <Text color={'blue'} fontSize={'sm'}>
          Bringing human & machine intelligence for impartial crypto analysis.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
        gap={{ base: 2, md: 4 }}
        pt={14}>
        <Info />
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
            <GridItem h={112} display={'flex'} flexDirection={'column'} p={4} justifyContent={'space-between'}>
              <Text color={'white'} fontWeight={'bold'} fontSize={14}>
                10%
              </Text>
              <Divider opacity={0.15} />
              <Flex justifyContent={'space-between'}>
                <Text color={'secondary'} fontSize={14} fontWeight={'bold'}>
                  Marketing & PR
                </Text>
                <CustomImage src={icons.info} width={15} height={15} />
              </Flex>
            </GridItem>
            <GridItem h={112} display={'flex'} flexDirection={'column'} p={4} justifyContent={'space-between'}>
              <Text color={'white'} fontWeight={'bold'} fontSize={14}>
                10%
              </Text>
              <Divider opacity={0.15} />
              <Flex justifyContent={'space-between'}>
                <Text color={'secondary'} fontSize={14} fontWeight={'bold'}>
                  Partnership
                </Text>
                <CustomImage src={icons.info} width={15} height={15} />
              </Flex>
            </GridItem>
            <GridItem h={112} display={'flex'} flexDirection={'column'} p={4} justifyContent={'space-between'}>
              <Text color={'white'} fontWeight={'bold'} fontSize={14}>
                10%
              </Text>
              <Divider opacity={0.15} />
              <Flex justifyContent={'space-between'}>
                <Text color={'secondary'} fontSize={14} fontWeight={'bold'}>
                  Uniqueness
                </Text>
                <CustomImage src={icons.info} width={15} height={15} />
              </Flex>
            </GridItem>
          </Grid>
          <TokenChart />
        </GridItem>
        <GridItem colSpan={1} display={'flex'} flexDirection={'column'}>
          <GoogleTrends />
          <Statistics />
          <BestBuy />
        </GridItem>
      </Grid>
    </Box>
  );
};
TokenPage.Layout = DefaultLayout;

export default TokenPage;
