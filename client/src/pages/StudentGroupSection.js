import React,{useState,useEffect} from "react";
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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption
} from "@chakra-ui/react";
import axios from "axios";
import { useSnackbar } from 'notistack';
import { Link } from "react-router-dom";
import groupJoin from "../Assets/Images/joinGroup.svg";
import collaboration from '../Assets/Images/collaboration.svg'
import { useNavigate } from "react-router-dom";
import JoinClass from "./JoinClass";
import {BsClipboardCheck} from 'react-icons/bs'

const StudentGroupSection = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [acceptRejectState,setChange] = useState(false);

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
  const [groupData,setGroupData] = useState()
  const [classData, setClassData] = useState();

  // const { hasCopied, onCopy } = useClipboard();
  const { user } = useSelector((state) => state?.user);
  console.log("USER",user)
  const token = localStorage.getItem("token");

  const getClassData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/student/getClassData`,
        headers: {
          Authorization: token,
        },
      });
      setClassData(response.data.classData);
    } catch (error) {
      console.log(error);
    }
  };

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

      console.log("Create GROUP",response)
      if(response.data.ok){
        enqueueSnackbar(response.data.message, { variant: 'success' });
      setChange(!acceptRejectState)
      onCloseCreateGroup()
      }else{
      enqueueSnackbar(response.data.message, { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar("Failed to create group", { variant: 'error' });
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

      if(response.data.ok){
        enqueueSnackbar(response.data.message, { variant: 'success' });
      setChange(!acceptRejectState)
      onCloseJoinGroup()
      }else{
      enqueueSnackbar(response.data.message, { variant: 'error' });
      }

    } catch (error) {
      console.log(error);
    }
  }

  const getGroupDetails = async()=>{
    try {
      const response = await axios({
        method: "GET",
        url: `/student/groupDetails`,
        headers: {
          Authorization: token,
        },
      });
      setGroupData(response.data.groupData)
    } catch (error) {
      console.log(error);
    }
  }

 

  useEffect(() => {
    getGroupDetails()
    getClassData()
  }, [acceptRejectState]);
    console.log("GroupClass",classData)
  return (
    <>
    {

        classData ? <>{groupData?._id
          ?<>
          
          <Flex align={"center"} flexDirection={"column"}>
            <Text mt={"4rem"} fontSize={"2.1rem"} fontWeight={'bold'} >Group Section</Text>
            <Flex mt={'5rem'} ml={'4rem'}  width={'80%'}>
            <Box width={"40%"}>
              <Image  w={'90%'} src={collaboration}></Image>
            </Box>
            <Box width={"60%"}>
             <Text fontSize={"1.3rem"} fontWeight={'medium'}>
              Group Name : {groupData?.name}
             </Text>
             <Flex align={"center"}>

             <Text fontSize={"1.3rem"} mr={"0.2rem"} fontWeight={'medium'}>
              Group ID : {groupData?._id}
             </Text>
             <BsClipboardCheck color="grey" size={"1.2rem"} onClick={()=>{
                  navigator.clipboard.writeText(`${groupData?._id}`)
                  enqueueSnackbar(`${groupData?._id} Copied To Clipboard`, { variant: 'warning' });
                }} title={"CLICK HERE TO COPY TO CLIPBOARD"} id={"checkicon"} />
             </Flex>
             <Text fontSize={"1.3rem"} fontWeight={'medium'}>
              Number of Members : {groupData?.members.length}
             </Text>
             <Text fontSize={"1.3rem"} fontWeight={'medium'}>Group Leader : {groupData?.groupLeader.name}</Text>
            </Box>
            
            </Flex>
    
         
    
          
    
          </Flex>
            <Text textAlign={"center"} mt={"4rem"} fontSize={"2.1rem"} fontWeight={'bold'}>Group Member Details</Text>
          <Box width={'80%'} marginLeft={'auto'} marginRight={'auto'} marginBottom={'5rem'} border={'1px'} p={'1rem'} rounded={'xl'} mt={'2rem'} >
          <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Phone</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
    
                            {
                    groupData?.members.map((member)=>{
                      return (
                        <Tr>
                          <Td>{member?._id}</Td>
                          <Td>{member?.name}</Td>
                          <Td>{member?.phone}</Td>
                          <Td>
                           
                          </Td>
                        </Tr>
                      );
                    })
                  }
                            </Tbody>
                          </Table>
                        </TableContainer>
    
          </Box>
          
          </>:<><Flex direction={"column"} justify={"center"} align={"center"}>
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

    </>}</>:<>
          <JoinClass/>
      </>
    }
    
    </>
  );
};



export default StudentGroupSection;
