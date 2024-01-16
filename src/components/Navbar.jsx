import React from "react";
import { Flex, Box, HStack, Button, Text, Spacer } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export const Navbar = () => {
    return (
    <Box pos="sticky" top={0} zIndex={10} bg="white" w="100%" borderBottomWidth="1px">
        <Flex p="4" justify="center">
        <Spacer />
        <HStack spacing={6} align="center">
          <Navlink title="GhostDev" />

          <Button colorScheme="black" variant="link">
            <FaGithub />
            <Text pl="2">{"Source"}</Text>
          </Button>
        </HStack>
        <Spacer />

        <Button colorScheme="facebook" size="md" onClick={() => console.log("Downloading Resume...")}>
          <FiDownload />
          <Text pl="2">{"Resume"}</Text>
        </Button>
      </Flex>
    </Box>
    );
};

const Navlink = ({ title }) => {
    return (
        <Button colorScheme='black' variant='link'>
            {title}
        </Button>
    );
};