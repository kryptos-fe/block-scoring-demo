import React from 'react';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';
import theme from '@/theme/theme.js';

export const BestBuy = () => {
  return (
    <Box flex={1} mt={4} bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      <Flex justifyContent={'space-between'} h={46} px={3} py={5}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'sm'}>
          Best Buy
        </Text>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Box p={4}>
        <Text color={'white'} fontSize={14}>
          Across 50 exchanges, price of Bitcoin is lowest on Bitfinex.
        </Text>
        <Text color={'primary'} fontSize={12}>
          Best buy price updated 1 minute ago
        </Text>
      </Box>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex
        bg={'rgba(255,255,255,.125)'}
        cursor={'pointer'}
        w={'87px'}
        h={'34px'}
        sx={{
          border: `1px solid ${theme.colors.primary}`,
          borderRadius: 4,
        }}
        mt={2}
        ml={2}
        alignItems={'center'}
        justifyContent={'center'}>
        <CustomImage src={icons.cart} width={'11px'} height={'11px'} />
        <Text color={'white'} fontSize={12} ml={1}>
          BUY NOW
        </Text>
      </Flex>
    </Box>
  );
};
