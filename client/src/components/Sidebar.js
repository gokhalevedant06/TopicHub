import React,{useRef}from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Avatar,
    Flex,
    Button
  } from '@chakra-ui/react'
  
  import { ArrowRightIcon } from '@chakra-ui/icons'

const Sidebar = () => {
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
          <DrawerHeader textAlign={"center"}>Your Profile</DrawerHeader>

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