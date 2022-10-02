import React, { useEffect, useState } from 'react';
import { Box, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { icons } from '@/constants/index.js';
import CustomImage from '@/components/CustomImage/index.js';
import dynamic from 'next/dynamic';
import theme from '@/theme/theme.js';
import moment from 'moment';
import { getRandomInt } from '@/utils';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export const TokenChart = ({ token, setMinPrice, setMaxPrice }) => {
  const generateData = (date) => {
    let data = [];
    for (let i = 1; i <= 120; i++) {
      if (i <= 40) {
        data.push([date + 3 * 86400000 * i, getRandomInt(17000, 18000)]);
      } else if (i > 40 && i <= 80) {
        data.push([date + 3 * 86400000 * i, getRandomInt(18000, 19000)]);
      } else {
        data.push([date + 3 * 86400000 * i, getRandomInt(19000, 20000)]);
      }
    }
    return data;
  };

  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);
  const [price, setPrice] = useState(0);
  const [valueChange, setValueChange] = useState(0);
  const [percentChange, setPercentChange] = useState(0);

  useEffect(() => {
    const date = moment().subtract(365, 'days');

    const chartData = generateData(date);

    setPrice(chartData[chartData.length - 1][1]);

    setValueChange(chartData[chartData.length - 1][1] - chartData[chartData.length - 2][1]);
    setPercentChange(
      (chartData[chartData.length - 1][1] - chartData[chartData.length - 2][1]) / chartData[chartData.length - 2][1]
    );

    let prices = [];

    chartData.forEach((item, index) => {
      prices.push(item[1]);
    });

    setMinPrice(Math.min(...prices));
    setMaxPrice(Math.max(...prices));
    const optionsDemo = {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
        foreColor: '#ffffff',
      },
      dataLabels: {
        enabled: false,
      },
      selection: {
        enabled: false,
      },

      annotations: {
        yaxis: [
          {
            y: 30,
            label: {
              show: true,
              text: 'Support',
              style: {
                color: '#fff',
                background: theme.colors.primary,
              },
            },
          },
        ],
        xaxis: [
          {
            x: date,
            borderColor: '#775DD0',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
            },
          },
        ],
      },

      xaxis: {
        type: 'datetime',
        min: date + 86400000 * 30,
        tickAmount: 12,
      },
      tooltip: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    };

    const seriesDemo = [
      {
        name: 'Token',
        data: chartData,
      },
    ];
    setSeries(seriesDemo);
    setOptions(optionsDemo);
  }, []);
  return (
    <Box bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'} mt={4}>
      <Flex justifyContent={'space-between'} h={46} px={3} py={5}>
        <Text color={'primary'} fontWeight={'bold'} fontSize={'sm'}>
          Real Time Price Chart
        </Text>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Box w={'100%'} p={4}>
        <Box>
          <HStack spacing={2} p={4}>
            {token.image ? <CustomImage src={token.image} width={'56px'} height={'56px'} mr={2} /> : null}
            <Box>
              <Text color={'white'} fontSize={16} fontWeight={'bold'} opacity={0.85}>
                {token.tokenName}/USDT
              </Text>
              <HStack spacing={2} alignItems={'baseline'}>
                <Text color={'white'} fontSize={18} fontWeight={'bold'} opacity={0.85}>
                  {price}
                </Text>
                <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                  USDT
                </Text>
                <Text color={valueChange > 0 ? 'primary' : 'red'} fontSize={16} fontWeight={'bold'} opacity={0.85}>
                  {valueChange > 0 && '+'}
                  {valueChange}
                </Text>
                <Text color={percentChange > 0 ? 'primary' : 'red'} fontSize={16} fontWeight={'bold'} opacity={0.85}>
                  {percentChange > 0 && '+'}
                  {percentChange.toFixed(3)}%
                </Text>
                <Text color={valueChange > 0 ? 'primary' : 'red'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                  Today
                </Text>
              </HStack>
            </Box>
          </HStack>
          <HStack spacing={2} p={4}>
            <Flex
              w={7}
              h={7}
              bg={'#3179f52e'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                1D
              </Text>
            </Flex>
            <Flex
              w={7}
              h={7}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                1M
              </Text>
            </Flex>
            <Flex
              w={7}
              h={7}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                3M
              </Text>
            </Flex>
            <Flex
              w={7}
              h={7}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                1Y
              </Text>
            </Flex>
            <Flex
              w={7}
              h={7}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                5Y
              </Text>
            </Flex>
            <Flex
              w={7}
              h={7}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                cursor: 'pointer',
              }}>
              <Text color={'white'} fontSize={12} fontWeight={'bold'} opacity={0.85}>
                All
              </Text>
            </Flex>
          </HStack>
          {series && options && <Chart options={options} series={series} type="area" width="100%" height={260} />}
        </Box>
      </Box>
    </Box>
  );
};
