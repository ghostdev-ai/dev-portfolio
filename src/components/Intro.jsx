import React from "react";
import { Flex, Box, Container, HStack, VStack, Avatar, Button, Heading, Text, Spacer, Link, Icon } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import portfolioData from "../data/data.json"

export const Intro = () => {
    const { introduction } = portfolioData
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" p="8">
            <Container maxW='4xl' p='4' textAlign='center'>
                <Box>
                    <Heading as="h1" fontSize="5xl" fontWeight="bold" mb='4'>{introduction.name}</Heading>
                    <Text fontSize="xl" color="gray.500">{introduction.occupation}</Text>
                </Box>
                <Box mt='4'>
                    <Text>{introduction.description}</Text>
                </Box>
                <Flex justify="center" alignItems="center" mt='4'>
                    <Link href="https://github.com/ugomezjr" target="_blank" rel="noopener noreferrer" ml='4' mr='4'>
                        <Icon as={FaGithub} boxSize={8} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ulisesgomezjr/" target="_blank" rel="noopener noreferrer" ml='4' mr='4'>
                        <Icon as={FaLinkedin} boxSize={8} />
                    </Link>
                    <Link href="https://twitter.com/ghostdev_ai" target="_blank" rel="noopener noreferrer" ml='4' mr='4'>
                        <Icon as={FaTwitter} boxSize={8} />
                    </Link>
                </Flex>
            </Container>
        </Flex>
    );
};