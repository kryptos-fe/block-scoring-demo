import React from 'react';
import {Button, Divider, Flex, GridItem, Text} from '@chakra-ui/react';
import CustomImage from '@/components/CustomImage/index.js';
import {icons} from '@/constants/index.js';
import {ViewIcon} from '@chakra-ui/icons';
import {useRouter} from "next/router";

export const CardToken = ({title, rank}) => {
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
          router.push('/token/1')
        }}
      >
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text color={'primary'} fontSize={'lg'}>
            {title}
          </Text>
          <CustomImage src={icons.bitcoin} width={30} height={30}/>
        </Flex>
        <Divider sx={{opacity: 0.4}}/>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text color={'secondary'} fontSize={'sm'}>
            RANK: {rank}
          </Text>
          <Button leftIcon={<ViewIcon/>} variant="outline" w={120} h={'36px'}>
            <Text fontSize={'xs'}>View score</Text>
          </Button>
        </Flex>
      </GridItem>
    </React.Fragment>
  );
};
