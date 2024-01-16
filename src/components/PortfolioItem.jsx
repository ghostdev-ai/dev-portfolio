import { Box, HStack, Image, Heading, Text, Tag, Spacer, Flex } from '@chakra-ui/react'

export const PortfolioItem = ({imgUrl, title, description, stack, repoUrl}) => {
  const handleLinkClick = () => {
    window.open(repoUrl, "_blank");
  }
  
  return (
    <Box onClick={handleLinkClick}  p='4' m='2' maxW='sm' borderWidth='1px'>
      <Image src={imgUrl} borderRadius='lg' />
      
      <Box mt='4' borderWidth='1px'>
        <Heading size='md'>{title}</Heading>
      </Box>
    
      <Box mt='2' borderWidth='1px'>
        <Text>{description}</Text>
      </Box>
      
      <Box display="flex" alignItems='center' mt='2' borderWidth='1px'>
        <Spacer />
        {stack.map(item => (
          <Tag key={item} ml='2'>{item}</Tag>
        ))}
      </Box>
    </Box>
  )
}