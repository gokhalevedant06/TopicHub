import React from 'react'
import NoData from "../Assets/Images/NoData.svg";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.user);
  const { email, groupDetails, joinedClassID, name, phone, _id } = user;
  const { isOpen , onOpen, onClose } = useDisclosure();
  const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

  return (
    <>
    {user.joinedClassID ?(
    <Flex direction="column">
      <Flex direction="row" width="100%" height="130px" alignItems={'center'} >
        <Text m={10} fontSize='2xl'>Hello, {name} <br/>
        <Text  fontSize='xl'>{email}</Text></Text>
        <Spacer />
      </Flex>
      

      
      <Box borderRadius={60} zIndex={1} m={20} bg='rgba(0,0,0,0)'>
        <Text ml={500} align={'center'} as='i' fontSize='3xl' >Class Description</Text >
        <Text color='black' fontSize='xl' m={8}  >//description here</Text></Box>
      <Flex direction={"row"} justify="center" width={"100%"} wrap = {'wrap'}>
      <Box>
      <Button m={"1rem"} w={"200px"}  onClick={()=>navigate('/student/subjectSection')} width = {'80%'} ><Text fontSize='xl' align='center' >My Subjects</Text></Button>
      </Box>
      <Box>
      <Button m={"1rem"} w={"200px"}  onClick={()=>navigate('/student/groupSection')} width = {'80%'} ><Text fontSize='xl' align='center' >My Group</Text></Button>
      </Box>
      </Flex>
      </Flex>
   
    ):(
      <>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image my={"3rem"} src={NoData} w={"25%"}></Image>
            <Text my={"2rem"} fontSize="1.5rem">
              You haven't joined any classes yet. Join a class and start Learning!
            </Text>
            <Link to="/student/joinClass">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"teal"}
              >
                Join A Class
              </Button>
            </Link>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>dfhhf</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )}
    </>
  );
};

export default StudentClassSection