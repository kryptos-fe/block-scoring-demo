import { Box } from '@chakra-ui/react';

export const EmptyLayout = ({children}) => {
  return <Box width='100%' minHeight='100vh'>
    {children}
  </Box>
}