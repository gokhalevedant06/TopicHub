import React from 'react'
import {
  Flex,
  useDisclosure,
  Spacer,
  Box,
  FormControl,
  Drawer,DrawerOverlay,DrawerContent,DrawerBody,DrawerHeader,
  Input,
  Text,
  Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
  Button,
  Image,
  Menu,MenuItem,MenuList,MenuButton} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { AddIcon, HamburgerIcon, InfoIcon,ChevronDownIcon } from '@chakra-ui/icons'
import landing from '../Assets/Images/StudentClass.svg'
import { useSelector } from "react-redux";

const StudentClassSection = () => {
  const { user } = useSelector((state) => state?.user);
  const { email, groupDetails, joinedClassID, name, phone, _id } = user;
  const { isOpen , onOpen, onClose } = useDisclosure();
  const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  return (
    <Flex direction="column">
      <Flex direction="row" width="100%" height="130px"  >
        <Text m={10} fontSize='2xl'>Hello, {name} <br/>
        <Text  fontSize='xl'>{email}</Text></Text>
        <Spacer />
        <Box mr={10} mt={10} >
          <Button onClick={onEditOpen}>
            <AddIcon fontSize='md' mr={3} />
            <Text fontSize='xl' align='center' >JOIN CLASS</Text></Button>
        </Box>
        <Modal isOpen={isEditOpen} onClose={onEditClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align="center" fontSize='2xl'>JOIN CLASS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                {/* <FormLabel fontSize='md' mb={3}>ENTER CLASS CODE</FormLabel> */}
                <Text mb={1}>Enter the class code provided by your teacher</Text>
                <Flex alignItems='center'>
                  {/* <HamburgerIcon mr={3} /> */}
                  <Input placeholder='Class Code' />
                </Flex>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} colorScheme='blue'>JOIN CLASS</Button>

            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box mt={10} mr={10}>
          <Button onClick={onDeleteOpen}>
            <InfoIcon fontSize='md' mr={3}/>
            <Text fontSize='xl' align='center' >GROUP INFO</Text>
            </Button>
          </Box>
        <Drawer placement='right' onClose={onDeleteClose} isOpen={isDeleteOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Menu>
  <MenuButton mt={10} mr={10} as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
  <MenuItem onClick={onDeleteOpen}>Group Info</MenuItem>

    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

      </Flex>

      {/* <Flex direction={'row'}> 
        <Image>
       z-index={3}
       opacity={0.3}
           src={landing}
           w={"100%"}
           h={"60vh"}
           mt={200}
           position={"relative"}
         </Image> */}
    
      <Box borderRadius={60} zIndex={1} m={20} bg='rgba(0,0,0,0)'>
        <Text ml={500} align={'center'} as='i' fontSize='3xl' >Class Description</Text >
        <Text color='black' fontSize='xl' m={8}  >Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam eos nostrum,
          illo cupiditate repellat reprehenderit culpa rem consequuntur pariatur eius reiciendis at nisi quod ratione consectetur. Commodi, officia molestias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis quam voluptate, culpa minus pariatur, ex omnis id consequuntur,
          libero nostrum! Deleniti, sunt quas reiciendis beatae, atque aut, labore sapiente error nisi reprehenderit aliquam magnam.</Text></Box>
      <Flex direction={"row"} justify="center" width={"100%"} wrap = {'wrap'}>
      <Box>
      <Button m={"1rem"} w={"200px"} width = {'80%'} ><Text fontSize='xl' align='center' >My Teachers</Text></Button>

      </Box>
      </Flex>
      </Flex>
   
  )
}

export default StudentClassSection