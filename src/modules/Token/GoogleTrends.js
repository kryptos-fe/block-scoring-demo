import React from 'react';
import { Box, Divider, Flex, GridItem, Text } from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';

export const GoogleTrends = () => {
  return (
    <Box h={250} bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      <Flex justifyContent={'space-between'} h={46} px={3} py={5}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'sm'}>
          Github Activity Chart
        </Text>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
    </Box>
  );
};
