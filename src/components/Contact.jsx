import React from "react";
import { useFormik } from "formik";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Flex, Spacer, VStack, Input,Heading, Textarea, Button, Box, Container } from "@chakra-ui/react";

export const Contact = () => {
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" p="8" borderWidth='1px'>
            <Container maxW='4xl' p='4' borderWidth='1px'>
            <Flex p='2' borderWidth='1px'>
                <Heading size="lg">Contact_</Heading>
            </Flex>
            <Flex flexDirection="column" mt='4' p='2' borderWidth='1px'>
                <ContactForm />
            </Flex>

            </Container>
        </Flex>
    );
};


const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSumbit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <>
            <FormControl onSubmit={formik.handleSubmit}>
                <FormLabel
                >
                    Name
                </FormLabel>
                <Input />
                
                <FormLabel>Email</FormLabel>
                <Input 
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                
                <FormLabel>Subject</FormLabel>
                <Input />
                <FormLabel>Message</FormLabel>
                <Textarea />
                <Flex mt='4' type='submit'>
                    <Button 
                        type="submit"
                        colorScheme="facebook"
                    >
                        Send Message
                    </Button>
                </Flex>
            </FormControl>
        </>   
    )
}