import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { memo } from 'react'

export const ServicesDescriptionCard = memo(() => {
  return (
    <Flex align="center" justify="center">
      <Box
        bg="white"
        h="80vh"
        w="sm"
        mt={8}
        p={8}
        borderRadius="10px"
        shadow="md"
      >
        <Box pb={4}>
          <Heading fontSize="2xl">Services</Heading>
          <Text fontSize="sm">TEST</Text>
        </Box>
      </Box>
    </Flex>
  )
})
