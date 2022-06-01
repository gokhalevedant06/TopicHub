import React from 'react'
// import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useClipboard } from '@chakra-ui/react'
import {
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Input,
  FormControl,
  FormLabel,
  Image,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import groupJoin from '../Assets/Images/joinGroup.svg'
const StudentGroupSection = () => {
  const { isOpen , onOpen, onClose } = useDisclosure();
  const{ 
    isOpen: isOpenJoinGroup,
    onOpen: onOpenJoinGroup,
    onClose: onCloseJoinGroup
  } = useDisclosure()
  const {
    isOpen: isOpenCreateGroup,
    onOpen: onOpenCreateGroup,
    onClose: onCloseCreateGroup
  } = useDisclosure()
  const [value, setValue] = React.useState('(Group id here)')
  const { hasCopied, onCopy } = useClipboard(value)
  const { user } = useSelector((state) => state?.user);
  
  return (
    <>
    {user.groupID ?(
   <Flex flexDirection={"column"} align="center"  justifyContent={'center'} height = {'100vh'}>
                <Box>
              <Button m={"1rem"} w={"200px"} onClick={onOpenCreateGroup}> Create a Group</Button>
              <Modal isOpen={isOpenCreateGroup} onClose={onCloseCreateGroup}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader align={'center'}>Create a New Group!</ModalHeader>
                <ModalCloseButton />
                <ModalBody align={'center'}>
                <Text>Copy this Group ID and send to your fellow members!</Text>
                </ModalBody>
                <Flex flexWrap={'wrap'} ml = {'50px'} mr = {"50px"}>
                <Input value={value} align={'center'}/>
                </Flex>
                <ModalFooter>
                  <Button colorScheme='green' mr={3} onClick={onCopy}> 
                  {hasCopied ? 'Copied' : "Copy Group ID"}</Button>

                  <Button colorScheme='blue' mr={3} onClick={onCloseCreateGroup}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
              <Button m={"1rem"} w={"200px"} onClick = {onOpenJoinGroup}>Join a Group </Button>
              <Modal
        isOpen={isOpenJoinGroup}
        onClose={onCloseJoinGroup}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join a Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter Group ID as given to you by the leader</FormLabel>
              <Input placeholder='Code' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3}>
              Join
            </Button>
            <Button onClick={onCloseJoinGroup}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </Box>
  </Flex>
  
  ): (
    <>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Image my={"3rem"} src={groupJoin} w={"37%"}></Image>
            <Text my={"2rem"} fontSize="1.5rem">
              You haven't joined any groups yet. Join a group and start collaborating!
            </Text>
            <Link to="/student/joinGroup">
              <Button
                m={"2rem"}
                height={"3rem"}
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                colorScheme={"teal"}
              >
                Join A Group
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

export default StudentGroupSection