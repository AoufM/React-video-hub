import React from 'react';
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            
    <form >
        <VStack alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'12'}>
    
    <Heading alignSelf={'center'}>Digi Hub</Heading>
    <Avatar alignSelf={'center'} boxSize={'16'}/>

    <Input placeholder={"Name"} 
    type='text' 
    required 
    focusBorderColor='teal.500'/>

    <Input placeholder={"Email"} 
    type='email' 
    required 
    focusBorderColor='teal.500'/>

    <Input placeholder={"Password"} 
    type='password' 
    required 
    focusBorderColor='teal.500'/>
    
     <Button colorScheme='teal' type='submit'>
       Sign Up
     </Button>
    
     <Text textAlign={'right'}>Already Signed In? {' '}
     <Button variant={'link'} colorScheme='teal'>
        <Link to={'/login'}>Log In</Link>
    </Button>
    </Text>
        </VStack>
    
    
    </form>
    
        </Container>
      )
}

export default SignUp
