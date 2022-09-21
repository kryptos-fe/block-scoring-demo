import React from 'react';
import { icons } from '@/constants/index.js';
import { Box, Divider, Flex, GridItem, HStack, Progress, Text } from '@chakra-ui/react';
import Link from 'next/link.js';
import NewImage from '@/components/NewImage';
import { Token } from '@/modules/Home/components/CardToken';
import { CustomImage2 } from '@/components/CustomImage';

interface InfoProps {
  token: Token;
}

export const Info = ({ token }: InfoProps) => {
  return (
    <GridItem height={456} colSpan={1} bg="mainBackground" pos={'relative'} boxShadow={'0 2px 10px rgb(0 0 0 / 10%)'}>
      {token?.image ? (
        <CustomImage2
          position={'relative'}
          src={token.image}
          width={75}
          height={75}
          sx={{
            position: 'absolute',
            left: '15%',
            top: -42,
            transform: 'translate(-50%, 0%)',
          }}
          isFill={true}
        />
      ) : null}
      <Box p={'1.25rem'} pt={12}>
        <Text fontSize={'md'} fontWeight={'bold'}>
          {token.tokenName}
        </Text>
        <Text fontSize={'sm'} py={3} sx={{ opacity: 0.85 }}>
          {/*Symbol: btc*/}
        </Text>
        <HStack spacing={5}>
          <Link href={'/'}>
            <NewImage src={icons.globe as any} width={15} height={15} />
          </Link>
          <Link href={'/'}>
            <NewImage src={icons.twitter as any} width={15} height={15} />
          </Link>
          <Link href={'/'}>
            <NewImage src={icons.document as any} width={15} height={15} />
          </Link>
        </HStack>
      </Box>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <NewImage src={icons.cubes as any} width={30} height={30} />
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
        <NewImage src={icons.info as any} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <NewImage src={icons.cubes as any} width={30} height={30} />
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
        <NewImage src={icons.info as any} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <NewImage src={icons.cubes as any} width={30} height={30} />
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
        <NewImage src={icons.info as any} width={15} height={15} />
      </Flex>
      <Divider sx={{ opacity: 0.4 }} />
      <Flex alignItems={'center'} py={5}>
        <NewImage src={icons.cubes as any} width={30} height={30} />
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
        <NewImage src={icons.info as any} width={15} height={15} />
      </Flex>
    </GridItem>
  );
};
