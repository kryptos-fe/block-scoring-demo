import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function BreakContent() {
  return (
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
  );
}

export default BreakContent;
