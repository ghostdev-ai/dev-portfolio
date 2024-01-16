import React from "react";
import { Flex, Box, Container, HStack, VStack, Avatar, Button, Heading, Text, Spacer } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Intro = () => {
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" p="8" borderWidth='1px'>
            <Container maxW='4xl' p='4' borderWidth='1px'>
                <Box p='2' borderWidth='1px'>
                    <Heading >GhostDev</Heading>
                </Box>
                <Box borderWidth='1px' mt='2' p='2'>
                    <Heading as='h2' size='md' fontWeight="semibold">Software Engineer and AI/Prompt enthusiast</Heading>
                </Box>
                <Box borderWidth='1px' mt='2' p='2'>
                    <Text>
                        I'm indie full-stack developer and AI/Prompt enthusiast with an insatiable passion for crafting solutions from scratch. I revel in the challenge of solving intricate problems and thrive on the creative process of programming. Whether it's developing scalable software or diving into the realms of AI, I bring a relentless commitment to excellence. My approach is fueled by innovation, a collaborative spirit, and an unwavering dedication to turning ideas into impactful realities. Join me on this journey, and let's code the future together!
                    </Text>
                </Box>
                <Flex justify="center" alignItems="center" mt='2' p='2' borderWidth='1px'>
        
                    <Box onClick={() => window.open("https://github.com/ugomezjr", "_blank")} borderWidth='1px'>
                        <FaGithub size={"2em"}/>
                    </Box>
             
                    <Box onClick={() => window.open("https://www.linkedin.com/in/ulisesgomezjr/", "_blank")} ml='12' mr='12' borderWidth='1px'>
                        <FaLinkedin size={"2em"} />
                    </Box>
              
                    <Box onClick={() => window.open("https://twitter.com/ghostdev_ai", "_blank")} borderWidth='1px'>
                        <FaTwitter size={"2em"} />
                    </Box>
              
                </Flex>
            
            </Container>
        </Flex>
    );
};