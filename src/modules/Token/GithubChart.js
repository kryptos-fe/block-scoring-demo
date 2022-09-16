import React, { useState } from 'react';
import { Box, Divider, Flex, GridItem, Text } from '@chakra-ui/react';
import { icons } from '@/constants/index.js';
import CustomImage from '@/components/CustomImage/index.js';
import dynamic from 'next/dynamic';
import theme from '@/theme/theme.js';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export const GithubChart = () => {
  const optionsDemo = {
    chart: {
      id: 'area',
      foreColor: '#ffffff',
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Github Events',
      align: 'left',
      style: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
      },
    },
  };
  const seriesDemo = [
    {
      name: 'STOCK ABC',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      title: {
        text: '321321321',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        },
      },
    },
  ];
  const [options, setOptions] = useState(optionsDemo);
  const [series, setSeries] = useState(seriesDemo);
  return (
    <GridItem
      colSpan={{ base: 1, lg: 2 }}
      bg="mainBackground"
      pos={'relative'}
      boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      <Flex justifyContent={'space-between'} h={46} px={3} py={5}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'sm'}>
          Github Activity Chart
        </Text>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>

      <Divider sx={{ opacity: 0.4 }} />
      <Box w={'100%'} height={300} p={5}>
        <Chart options={options} series={series} type="area" width="100%" height={260} />
      </Box>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex px={3} py={5} height={85} alignItems={'center'}>
        <CustomImage src={icons.info} width={15} height={15} />
        <Text sx={{ opacity: 0.85 }} color={'white'} fontSize={'sm'} fontWeight={'bold'}>
          Calculated over a period of 1 year
        </Text>
      </Flex>
    </GridItem>
  );
};
