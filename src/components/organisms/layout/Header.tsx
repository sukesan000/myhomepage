import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { memo, VFC } from 'react'

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="blue.800"
      color="gray.100"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
        <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
          わいのホームページ
        </Heading>
      </Flex>
      <Flex fontSize="sm" align="center" display={{ base: 'none', md: 'flex' }}>
        <Box pr={4}>
          <Link>Profile</Link>
        </Box>
        <Box pr={4}>
          <Link>Services</Link>
        </Box>
        <Box pr={4}>
          <Link>Social</Link>
        </Box>
        <Link>Works</Link>
      </Flex>
    </Flex>
  )
})
