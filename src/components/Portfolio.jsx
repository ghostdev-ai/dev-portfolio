import React from "react";
import { Flex, Center, Heading } from "@chakra-ui/react";
import portfolio from "../data/portfolio";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
    return (    
        <Flex justify="center" p="4" borderWidth='1px'>
            {
                portfolio.map(project => (
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
        </Flex>
    );
};