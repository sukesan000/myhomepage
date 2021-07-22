import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router-dom'

export const Header: VFC = memo(() => {
  const history = useHistory()
  const onClickProfile = useCallback(() => history.push('/'), [history])
  const onClickServices = useCallback(
    () => history.push('/services'),
    [history],
  )
  const onClickSocial = useCallback(() => history.push('/social'), [history])
  const onClickWorks = useCallback(() => history.push('/works'), [history])

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="blue.800"
      color="gray.100"
      padding={{ base: 3, md: 5 }}
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: 'pointer' }}
        onClick={onClickProfile}
      >
        <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
          わいのホームページ
        </Heading>
      </Flex>
      <Flex fontSize="sm" align="center" display={{ base: 'none', md: 'flex' }}>
        <Box pr={4}>
          <Link onClick={onClickProfile}>Profile</Link>
        </Box>
        <Box pr={4}>
          <Link onClick={onClickServices}>Services</Link>
        </Box>
        <Box pr={4}>
          <Link onClick={onClickSocial}>Social</Link>
        </Box>
        <Link onClick={onClickWorks}>Works</Link>
      </Flex>
    </Flex>
  )
})
