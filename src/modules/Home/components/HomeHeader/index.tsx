import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function HomeHeader() {
  return (
    <>
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
    </>
  );
}

export default HomeHeader;
