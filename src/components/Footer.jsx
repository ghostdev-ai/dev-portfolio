import React from "react";
import { Box } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box
            as="footer"
            color="gray.400"
            textAlign="center"
            p="4"
            mt="auto" // Use 'mt="auto"' to push the footer to the bottom of the container
            borderWidth='1px'
        >
        <Box>
            © 2024 GhostDev_. All Rights Reserved.
        </Box>
        </Box>
    )
}