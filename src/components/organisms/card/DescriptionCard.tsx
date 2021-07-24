import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { memo } from 'react'

export const DescriptionCard = memo(() => {
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
          <Heading fontSize="2xl">Profile</Heading>
          <Text fontSize="sm">
            ハ〜イ、ガイズ。
            マイネームイズ、コスケ・オヤマ。アイム、プログラマ。ヨロシクオネガイシマス。
          </Text>
        </Box>
        <Heading fontSize="2xl">Skills</Heading>
        <UnorderedList>
          <ListItem>html5/css3</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>Jquery</ListItem>
          <ListItem>React</ListItem>
          <ListItem>BootStrap</ListItem>
          <ListItem>Java</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>Linux</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  )
})
