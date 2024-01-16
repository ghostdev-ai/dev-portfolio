import React from "react";
import { Flex, HStack, Box, Tag, Heading, Text } from "@chakra-ui/react";


export const TimelineItem = () => {
    return (
        <Flex flexDirection="column" justify="center" mt="4" borderWidth='1px'>
            <HStack>
                <Box m='2'>
                    <Tag size='lg' variant='solid' bgColor="black">
                        2019
                    </Tag>
                </Box>
                <Box m='2'>
                    <Heading size='md' fontWeight='semibold'>Software Engineer</Heading>
                </Box>
                <Box m='2'>
                    <Text fontWeight="semibold" color="gray.400">2 years</Text>
                </Box>
            </HStack>
            
            <Flex m='2' p='2'>
                <Text 
                    textColor="gray.500" 
                    fontSize="md"
                >
                    I helped build an enterprise application for a Fortune 500 company in an Agile team setting. Our tech stack consisted of TypeSciprt, Angular, Java, Gradle, and a handful of other languages and tools.
                </Text>
            </Flex>

        </Flex>
    )
}
