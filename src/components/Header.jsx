import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom';
  import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {

    const {isOpen,onOpen,onClose}= useDisclosure();

  return (
    <>
      <Button
       zIndex={'overlay'}
      pos={'fixed'}
      top={'2'}
      left={'3'}
      colorScheme={'teal'}
      p={'0'}
      w={'10'}
      h={'10'}
      borderRadius={'full'}
      onClick={onOpen}>
        <BiMenuAltLeft size={"20"}/>
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
         <DrawerOverlay/>

         <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Digi Hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>

                <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                    <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='teal'>
                    <Link to={'/upload'}>Upload Video</Link>
                </Button>

                </VStack>

                <HStack 
                pos={'absolute'} 
                bottom={'10'} 
                left={'0'} 
                w={'full'}
                justifyContent={'space-evenly'}>
                  <Button onClick={onClose} colorScheme='teal'>
                    <Link to={'/login'}>Log In</Link>
                  </Button>
                  <Button onClick={onClose} colorScheme='teal' variant={'outline'}>
                    <Link to={'/signUp'}>Sign Up</Link>
                  </Button>
                </HStack>


            </DrawerBody>
         </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
