import React from 'react';
import CustomImage from '@/components/CustomImage/index.js';
import { icons } from '@/constants/index.js';
import { Box, Divider, Flex, GridItem, HStack, Progress, Text } from '@chakra-ui/react';
import Link from 'next/link.js';

export const Info = () => {
  return (
    <GridItem height={456} colSpan={1} bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      <CustomImage
        isFill
        width={75}
        height={75}
        src={icons.bitcoin}
        sx={{
          position: 'absolute',
          left: '15%',
          top: -42,
          transform: 'translate(-50%, 0%)',
        }}
      />
      <Box p={'1.25rem'} pt={12}>
        <Text fontSize={'md'} fontWeight={'bold'}>
          Bitcoin
        </Text>
        <Text fontSize={'sm'} py={3} sx={{ opacity: 0.85 }}>
          Symbol: btc
        </Text>
        <HStack spacing={5}>
          <Link href={'/'}>
            <CustomImage src={icons.globe} width={15} height={15} isFill />
          </Link>
          <Link href={'/'}>
            <CustomImage src={icons.twitter} width={15} height={15} isFill />
          </Link>
          <Link href={'/'}>
            <CustomImage src={icons.document} width={15} height={15} isFill />
          </Link>
        </HStack>
      </Box>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <CustomImage src={icons.cubes} width={30} height={30} />
        <Box flex={1} mx={2}>
          <Flex alignItems={'baseline'} justifyContent={'space-between'}>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15} mb={2}>
              Product Progress
            </Text>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15}>
              93%
            </Text>
          </Flex>
          <Progress colorScheme="green" size="xs" value={93} />
        </Box>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <CustomImage src={icons.cubes} width={30} height={30} />
        <Box flex={1} mx={2}>
          <Flex alignItems={'baseline'} justifyContent={'space-between'}>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15} mb={2}>
              Product Progress
            </Text>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15}>
              93%
            </Text>
          </Flex>
          <Progress colorScheme="green" size="xs" value={93} />
        </Box>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <CustomImage src={icons.cubes} width={30} height={30} />
        <Box flex={1} mx={2}>
          <Flex alignItems={'baseline'} justifyContent={'space-between'}>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15} mb={2}>
              Product Progress
            </Text>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15}>
              93%
            </Text>
          </Flex>
          <Progress colorScheme="green" size="xs" value={93} />
        </Box>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <CustomImage src={icons.cubes} width={30} height={30} />
        <Box flex={1} mx={2}>
          <Flex alignItems={'baseline'} justifyContent={'space-between'}>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15} mb={2}>
              Product Progress
            </Text>
            <Text color={'white'} sx={{ opacity: 0.85 }} fontSize={15}>
              93%
            </Text>
          </Flex>
          <Progress colorScheme="green" size="xs" value={93} />
        </Box>
        <CustomImage src={icons.info} width={15} height={15} />
      </Flex>
    </GridItem>
  );
};
