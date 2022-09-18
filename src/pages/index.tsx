import React from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout.js';
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';

import { CardToken } from '@/modules/Home/components/CardToken/index.js';

const HomePage = () => {
  return (
    <Box>
      <Box textAlign={'center'} p={{ base: 2, md: 4 }}>
        <Text color={'white'} fontSize={'lg'}>
          Crypto Research & Ranking Platform
        </Text>
        <Text color={'blue'} fontSize={'sm'}>
          Bringing human & machine intelligence for impartial crypto analysis.
        </Text>
      </Box>
      <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} mt={4} mb={4}>
        <Button variant={'primary'} w={213} h="36px" bgColor={'blue'}>
          Select index for ranking{' '}
        </Button>
      </Flex>
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
      <Box w={'100%'} p={4} bg={'header'} height={180}>
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          w={'100%'}
          h={'100%'}
          bg={'mainBackground'}>
          <Text color={'white'} fontSize={'sm'}>
            Crypto Portfolios Managed by AI
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} my={2}>
            <Text color={'white'} fontSize={'sm'}>
              From
            </Text>
            &nbsp;
            <Text color={'primary'} fontSize={'sm'}>
              Low Risk to Super Aggressive
            </Text>
            &nbsp;
            <Text color={'white'} fontSize={'sm'}>
              pick your portfolio style & let
            </Text>
            &nbsp;
            <Text color={'primary'} fontSize={'sm'}>
              human & machine intelligence
            </Text>
            &nbsp;
            <Text color={'white'} fontSize={'sm'}>
              work for you!
            </Text>
          </Flex>
          <Button w={150} mt={{ base: 4, md: '0' }} variant={'primary'} bgColor={'primary'}>
            View Portfolios
          </Button>
        </Flex>
      </Box>
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
