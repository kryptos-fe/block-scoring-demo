import React from 'react';
import { Button, Divider, Flex, GridItem, Text } from '@chakra-ui/react';
import { icons } from '@/constants/index.js';
import { ViewIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import NewImage from '@/components/NewImage';

interface SocialRating {
  score: number;
}

interface InvestorRating {
  score: number;
}

interface TechRating {
  score: number;
}

export interface Token {
  id: string;
  name: string;
  techRating: TechRating;
  socialRating: SocialRating;
  investorRating: InvestorRating;
}

interface TokenCardProps {
  token: Token;
}

export const CardToken = ({ token }: TokenCardProps) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <GridItem
        w="100%"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        bg="mainBackground"
        p={4}
        h={154}
        onClick={() => {
          router.push('/token/1');
        }}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text color={'primary'} fontSize={'lg'}>
            {token.name}
          </Text>
          <NewImage src={icons.bitcoin as any} width={30} height={30} />
        </Flex>
        <Divider sx={{ opacity: 0.4 }} />
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text color={'secondary'} fontSize={'sm'}>
            RANK: {token.id}
          </Text>
          <Button leftIcon={<ViewIcon />} variant="outline" w={120} h={'36px'}>
            <Text fontSize={'xs'}>View score</Text>
          </Button>
        </Flex>
      </GridItem>
    </React.Fragment>
  );
};
