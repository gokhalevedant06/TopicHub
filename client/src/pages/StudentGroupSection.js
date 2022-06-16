import React,{useState} from "react";
// import { useState } from 'react'
import { useSelector } from "react-redux";
import { useClipboard } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import groupJoin from "../Assets/Images/joinGroup.svg";
const StudentGroupSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenJoinGroup,
    onOpen: onOpenJoinGroup,
    onClose: onCloseJoinGroup,
  } = useDisclosure();
  const {
    isOpen: isOpenCreateGroup,
    onOpen: onOpenCreateGroup,
    onClose: onCloseCreateGroup,
  } = useDisclosure();

  const [createGroupData, setCreateGroupData] = useState()
  const [joinGroupData, setJoinGroupData] = useState()
  // const { hasCopied, onCopy } = useClipboard();
  const { user } = useSelector((state) => state?.user);
  console.log("USER",user)
  const token = localStorage.getItem("token");

  const createGroupHandler = (e)=>{
    // setCreateGroupData({...createGroupData,[e.target.name]:e.target.value})
    setCreateGroupData({
      ...createGroupData,[e.target.name]:e.target.value
    })
  }
  const joinGroupHandler = (e)=>{
    setJoinGroupData({
      ...joinGroupData,[e.target.name]:e.target.value
    })
    console.log(joinGroupData)
  }

  const createGroupCall = async()=>{
    try {
      const response = await axios({
        method: "POST",
        url: `/student/createGroup`,
        headers: {
          Authorization: token,
        },
        data:createGroupData
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }
  const joinGroupCall = async()=>{
    try {
      const response = await axios({
        method: "POST",
        url: `/student/joinGroup`,
        headers: {
          Authorization: token,
        },
        data:joinGroupData
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

    {
      user.groupDetails.groupID
      ?<>Joined</>:<><Flex direction={"column"} justify={"center"} align={"center"}>
      <Image my={"3rem"} src={groupJoin} w={"37%"}></Image>
      <Text my={"2rem"} fontSize="1.5rem">
        You haven't joined any groups yet. Join or Create a group and
        start collaborating!
      </Text>
      <Flex
        flexDirection={"column"}
        align="center"
        justifyContent={"center"}
        height={"10vh"}
      >
        <Box>
          <Button
            m={"1rem"}
            w={"200px"}
            onClick={onOpenCreateGroup}
            colorScheme="green"
          >
            {" "}
            Create a Group
          </Button>
          <Modal isOpen={isOpenCreateGroup} onClose={onCloseCreateGroup}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader >
                Create a New Group
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody >
                <Text>
                  Enter Group Details
                </Text>
                <Input mt={'1rem'} onChange={(e)=>createGroupHandler(e)} name='name' placeholder={"Enter Group Name"} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>createGroupCall()} colorScheme="green" mr={3} >
                 Create Group
                </Button>

                <Button
                  colorScheme="red"
                  mr={3}
                  onClick={onCloseCreateGroup}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button
            m={"1rem"}
            w={"200px"}
            onClick={onOpenJoinGroup}
            colorScheme="green"
          >
            Join a Group{" "}
          </Button>
          <Modal isOpen={isOpenJoinGroup} onClose={onCloseJoinGroup}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Join a Group</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>
                    Enter Group ID 
                  </FormLabel>
                  <Input placeholder="Enter Group ID" name="groupID" onChange={(e)=>joinGroupHandler(e)} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="green" onClick={()=>joinGroupCall()} mr={3}>
                  Join
                </Button>
                <Button onClick={onCloseJoinGroup} colorScheme="red">
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
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
    </Modal></>
    }
    
    </>
  );
};

export default StudentGroupSection;
