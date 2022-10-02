import React from 'react';
import { Box, Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';
import theme from '@/theme/theme.js';

export const Statistics = ({ minPrice, maxPrice }) => {
  return (
    <Box mt={4} bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      <Flex justifyContent={'space-between'} h={46} px={3} py={5}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'sm'}>
          Statistics
        </Text>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Grid templateColumns="repeat(2, 1fr)" py={4}>
        <GridItem
          sx={{ borderRight: `1px solid ${theme.colors.white}` }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          w="100%"
          h={'80px'}>
          <Text color={'primary'}>{maxPrice}$</Text>
          <CustomImage
            ml={1}
            width={'12px'}
            height={'18px'}
            src={icons.up}
            sx={{
              transform: 'rotate(180deg)',
            }}
          />
        </GridItem>
        <GridItem h={'80px'} display={'flex'} justifyContent={'center'} alignItems={'center'} w="100%">
          <Text color={'red'}>{minPrice}$</Text>
          <CustomImage ml={1} width={'12px'} height={'18px'} src={icons.down} />
        </GridItem>
      </Grid>
      <Divider sx={{ opacity: 0.4 }} />
      <Box h={6} />
    </Box>
  );
};
