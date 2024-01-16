import React from "react";
import { Center, Grid, Box, Flex, Heading } from "@chakra-ui/react";
import { PortfolioItem } from "./PortfolioItem";
import portfolioData from "../data/data.json"

export const Portfolio = () => {
    const { projects } = portfolioData

    return (
        <Center>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
                {
                    projects.map(project => (
                        <PortfolioItem 
                            key={project.title}
                            imgUrl={project.imgUrl}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            repoUrl={project.repoUrl}
                        />
                    ))
                }
            </Grid>
        </Center>
    )
};