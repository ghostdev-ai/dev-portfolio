import {Box, HStack, Image, Heading, Text, Tag, Spacer, Flex } from '@chakra-ui/react'

export const PortfolioItem = ({ imgUrl, title, description, stack, repoUrl }) => {
  const handleLinkClick = () => {
    window.open(repoUrl, "_blank");
  }
  
  return (
    <Box onClick={handleLinkClick} p='4' m='2' maxW='sm' position='relative' pb='8'>
      <Image src={imgUrl} borderRadius='lg' />

      <Box mt='4'>
        <Heading size='md'>{title}</Heading>
      </Box>

      <Box mt='2' mb="4">
        <Text>{description}</Text>
      </Box>

      <Flex
        position='absolute'
        bottom='0'
        left='0'
        width='100%'
        mt='4'
        justifyContent='flex-end'  // Align tags at the end of the row
        zIndex='1'
      >
        {stack.map(item => (
          <Tag key={item} ml='2'>{item}</Tag>
        ))}
      </Flex>
    </Box>
  );
};