import React,{useRef}from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useColorMode,
    Box,
    Avatar,
    Flex,
    Button,
    Text
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon} from "@chakra-ui/icons"
  
  import { ArrowRightIcon } from '@chakra-ui/icons'

const Sidebar = () => {
const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (
    <>
        <Box position="absolute" top={"45vh"} left={"5"}>
      <ArrowRightIcon background={"gray.300"} borderRadius="5px" height={"50px"} width={"50px"} padding={"10px"} ref={btnRef} onClick={onOpen} />
        </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} fontSize={"1.5rem"} fontWeight={"bold"} >
          <Button position={"absolute"} left={4} w={10} colorScheme='teal' onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
            Your Profile
          </DrawerHeader>

          <DrawerBody>
              <Flex direction={"column"} alignItems={"center"}>
                  <Box marginBottom={"2rem"}>
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/tioluwani-kolawole' />
                  </Box>
                  <Box>
                      <Flex direction={"column"}>
                     
                      <Button marginY={"0.5rem"}>Dashboard</Button>
                      <Button marginY={"0.5rem"}>Create Class</Button>
                      <Button marginY={"0.5rem"}>Logout</Button>
                      </Flex>

                  </Box>
              </Flex>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar