import React from 'react'
// import { useState } from 'react'
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

} from '@chakra-ui/react'
const StudentGroupSection = () => {
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
  
  return (
    <>
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
  </>
  )
}

export default StudentGroupSection