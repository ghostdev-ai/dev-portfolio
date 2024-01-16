import React from "react";
import { Flex, Container, Box, HStack, Heading, Text, Tag } from "@chakra-ui/react";
import { TimelineItem } from "./TimelineItem";


export const Timeline = () => {
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" p="8" borderWidth='1px'>
            <Container maxW='4xl' p='4' borderWidth='1px'>

                <Flex p='2' borderWidth='1px'>
                    <Heading size="lg">Timeline_</Heading>
                </Flex>
                
                <Flex flexDirection="column" mt='2' p='2' borderWidth='1px'>
                    <TimelineItem />
                    <TimelineItem />
                    <TimelineItem />
                </Flex>

            </Container>
            
        </Flex>
    )
}
