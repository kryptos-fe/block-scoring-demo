import { Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = ({ membershipType }) => {
  return (
    <Flex
      mt={5}
      bg={'mainBackground'}
      w={'100%'}
      flexDirection={'column'}
      h={100}
      justifyContent={'center'}
      alignItems={'center'}>
      <Text color={'primary'} fontSize={15} fontWeight={'bold'} mb={3}>
        Support | Legal | Privacy | Terms
      </Text>
      <HStack>
        <Text color={'white'} fontSize={15}>
          Copyright © 2022
        </Text>
        <Text color={'primary'} fontSize={15} fontWeight={'bold'}>
          Blocknomy.
        </Text>
        <Text olor={'white'} fontSize={15}>
          All rights reserved
        </Text>
      </HStack>
    </Flex>
  );
};
