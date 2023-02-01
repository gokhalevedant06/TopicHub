import React, { useState, useEffect } from "react";
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
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image
} from "@chakra-ui/react";
import axios from "../axios";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import { useSnackbar } from 'notistack';
import SubjectImage from '../Assets/Images/Subject.svg'


import { PhoneIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
const TeacherSubjectSection = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const user = useSelector(selectUser)
 const [createAssesment,setCreateAssesment] = useState()
 const [data, setData] = useState();
  const [createSubjectData,setCreateSubjectData] = useState();
  const [teachersInClass,setTeachersInClass] = useState();
  const [subjectData, setSubjectData] = useState();
  const [createAssessmentFor,setCreateAssessmentFor] = useState();
  const token = localStorage.getItem("token");
  const {
    isOpen: createSubject,
    onOpen: createSubjectOnOpen,
    onClose: createSubjectOnClose,
  } = useDisclosure();
  const {
    isOpen: isOpenAllSubjects,
    onOpen: onOpenAllSubjects,
    onClose: onCloseAllSubjects,
  } = useDisclosure();
  const {
    isOpen: isOpenAssesment,
    onOpen: onOpenAssesment,
    onClose: onCloseAssesment,
  } = useDisclosure();

  const [acceptRejectState,setChange] = useState(false);

  const {
    isOpen: mark,
    onOpen: onOpenMark,
    onClose: onCloseMark,
  } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay bg="rgba(92,103, 119, 0.8)" backdropFilter="blur(10px)" />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  

  const getTeachersInClass = async()=>{
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getTeachersInClass`,
        headers: {
          Authorization: token,
        },
      });
      setTeachersInClass(response.data.teachers);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreateAssesmentChange = (e)=>{
    setCreateAssesment({
      ...createAssesment,[e.target.name]:e.target.value
    })

    console.log(createAssesment)
  }

  const createAssessmentCall = async()=>{
    console.log(createAssessmentFor.title)
    let newData = {...createAssesment,forSubject:createAssessmentFor._id}
    try {
      const response = await axios({
        method: "POST",
        url: `/teacher/createAssesment`,
        data: newData,
        headers: {
          Authorization: token,
        },
      });
      if(response.data.ok){
        enqueueSnackbar(response.data.message, { variant: 'success' });
        onCloseAssesment()
      setChange(!acceptRejectState)
      }else{
      enqueueSnackbar(response.data.message, { variant: 'error' });
      onCloseAssesment()
      }
      console.log(response);
    } catch (error) {
      enqueueSnackbar("Something Went Wrong", { variant: 'error' });
      console.log(error);
    }
  }

  const getSubjectData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/teacher/getSubjectsInClass`,
        headers: {
          Authorization: token,
        },
      });
      // console.log(response.data)
      setSubjectData(response.data.subjects);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateSubjectChange = (e)=>{
    setCreateSubjectData({...createSubjectData,[e.target.name]:e.target.value})
    console.log(createSubjectData)
  }

  const createSubjectCall = async()=>{
    let response;
    try {
      response = await axios({
        method: "POST",
        url: `/teacher/createSubject`,
        data: createSubjectData,
        headers: {
          Authorization: token,
        },
      });

      if(response.data.ok){
        enqueueSnackbar(response.data.message, { variant: 'success' });
        createSubjectOnClose()
      setChange(!acceptRejectState)

      }else{
      enqueueSnackbar(response.data.message, { variant: 'error' });
      createSubjectOnClose()
      }
      console.log(response);
    } catch (error) {
      enqueueSnackbar("Something Went Wrong", { variant: 'error' });
      console.log(error);
    }
  }

  const acceptTopic = async(groupID,assesmentID)=>{
    console.log(groupID,assesmentID)
    try {
      const response = await axios({
        method: "POST",
        url: `/teacher/acceptTopic`,
        data: {
          groupID,assesmentID
        },
        headers: {
          Authorization: token,
        },
      });
      enqueueSnackbar("Topic Accepted", {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        variant:"success"
      })
      setChange(!acceptRejectState)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const rejectTopic = async(groupID,assesmentID)=>{
    console.log(groupID,assesmentID)
    try {
      const response = await axios({
        method: "POST",
        url: `/teacher/rejectTopic`,
        data: {
          groupID,assesmentID
        },
        headers: {
          Authorization: token,
        },
      });
      enqueueSnackbar("Topic Rejected", {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        variant:"warning"
      })
      setChange(!acceptRejectState)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const [membersDataAllot,setMembers] = useState()
  const showMembersForAssessment = async(groupID,subject,assesment)=>{
    console.log(assesment)
    console.log(groupID)
    const gp = assesment.appearingGroupDetails.find(g=>g._id==groupID)
    console.log(gp.groupID.members)
    setMembers(gp.groupID.members);
    onOpenMark()
  }

  useEffect(() => {
    getSubjectData();
    getTeachersInClass();
  }, [acceptRejectState]);

  return (
    <>
      <Flex justify={"center"}>
        <Flex wrap={"wrap"} width={"100%"} mt={"1rem"}>
          <Flex
            flexDirection={"column"}
            width={"100%"}
            justify={"center"}
            align={"center"}
          >
            <Box>
              <Button
                m={"1rem"}
                w={"200px"}
                height={"3.5rem"}
                colorScheme={"orange"}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  createSubjectOnOpen();
                }}
              >
                Create Subject
              </Button>
              <Button
                m={"1rem"}
                w={"200px"}
                height={"3.5rem"}
                colorScheme={"blue"}
                onClick={onOpenAllSubjects}
              >
                View Subject Details
              </Button>

              <Button
                m={"1rem"}
                w={"200px"}
                height={"3.5rem"}
                colorScheme={"teal"}
              >
                Delete Subject
              </Button>
              <Button
                m={"1rem"}
                w={"200px"}
                height={"3.5rem"}
                colorScheme={"pink"}
              >
                Update Subject Details
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Modal onClose={createSubjectOnClose} isOpen={createSubject} isCentered>
        {overlay}
        <ModalContent>
          <ModalHeader>Enter Subject Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="text" name="title"   onChange={(e)=>handleCreateSubjectChange(e)} placeholder="Enter Title" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input name="description"  onChange={(e)=>handleCreateSubjectChange(e)} placeholder="Enter Description" />
                <InputRightElement children={<CheckIcon id="checkicon" color="green.500" />} />
              </InputGroup>
              <Select name="subjectTeacher" onChange={(e)=>handleCreateSubjectChange(e)} placeholder="Select Subject Teacher">
                {
                  teachersInClass?.map((teacher)=>{
                    return(
                      <option value={teacher._id} > {teacher._id} ( {teacher.name} )</option>
                    )

                  }
                )}
              </Select>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button mx={"1rem"} onClick={()=>createSubjectCall()} colorScheme={"green"}>
              Create Subject
            </Button>
            <Button colorScheme={"red"} onClick={createSubjectOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        scrollBehavior={"inside"}
        onClose={onCloseAllSubjects}
        size={"6xl"}
        isOpen={isOpenAllSubjects}
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Subject Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Subject 1</Tab>
                <Tab>Subject 2</Tab>
                <Tab>Subject 3</Tab>
                <Tab>Subject 4</Tab>
              </TabList>
              <TabPanels>
                {subjectData?.map((subject) => {
                  // console.log("HERE", subject);
                  return (
                    <TabPanel>
                      <Flex justify={"center"}>
                        <Flex justify={"center"} width={"40%"}>
                         <Image src={SubjectImage} width={"80%"}></Image>
                        </Flex>
                        <Flex flexDirection={"column"} width={"60%"}>
                          <Text>Title : {subject.title}</Text>
                          <Text>Description : {subject.description}</Text>
                          <Text>
                            Teacher Name : {subject.subjectTeacher?.name}
                          </Text>
                          <Flex>
                            <Button
                              onClick={()=>{
                                onOpenAssesment()
                                setCreateAssessmentFor(subject)
                              }
                            }
                              my={"1rem"}
                              mr={"1rem"}
                              colorScheme={"green"}
                            >
                              Create Assessment
                            </Button>


                            <Modal isOpen={isOpenAssesment} onClose={onCloseAssesment}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter New Assessment Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              {/* <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                />
                <Input type="text" fontWeight={"bold"} name="forSubject" disabled placeholder={`${subject.title}`} />
              </InputGroup> */}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="text" name="title"  onChange={(e)=>handleCreateAssesmentChange(e)} placeholder="Enter Title"  />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter Description" name="description"  onChange={(e)=>handleCreateAssesmentChange(e)}/>
                <InputRightElement children={<CheckIcon id="checkicon" color="green.500" />} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter Total Marks" name='totalMarks' onChange={(e)=>handleCreateAssesmentChange(e)} />
                <InputRightElement children={<CheckIcon id="checkicon" color="green.500" />} />
              </InputGroup>
            </Stack>
          </ModalBody>
                        
          <ModalFooter>
            <Button onClick={() => createAssessmentCall()}>Create Assessment</Button>
            <Button colorScheme="blue" ml={3} onClick={onCloseAssesment}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      
                          </Flex>
                        </Flex>
                      </Flex>
                      <Text>Previous/On Going Assessments</Text>

                          <Box>
                            <Accordion>
                      {subject?.assesments?.map((assesment) => {
                        return (
                              <AccordionItem>
                                <h2>
                                  <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                      {assesment.title}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  <Box>
                                    <Text>Title : {assesment.title}</Text>
                                    <Text>
                                      Description: {assesment.description}
                                    </Text>
                                  </Box>

                                  <TableContainer>
                                    <Table variant="simple">
                                      <Thead>
                                        <Tr>
                                          <Th>Group Name</Th>
                                          <Th>Topic Name</Th>
                                          <Th>Status</Th>
                                        </Tr>
                                      </Thead>
                                      <Tbody>
                                        {assesment?.appearingGroupDetails?.map(
                                          (group, index) => {
                                            // console.log("gp",group)
                                            return (
                                              <>
                                                <Tr>
                                                  <Td> {group._id}</Td>
                                                  <Td>
                                                    {group?.topic?.name ? (
                                                      <>{group?.topic?.name}</>
                                                    ) : (
                                                      <>Topic Not Entered</>
                                                    )}
                                                  </Td>
                                                  <Td>
                                                    <Flex align={"center"}>
                                                      {
                                                        group?.topic?.name?<>{
                                                          group?.topic?.isApproved?<><Text fontWeight={"bold"} color={"green"}>Accepted By You</Text></>:
                                                        
                                                          group?.topic?.isRejected?<><Text fontWeight={"bold"} color={"red"}>Rejected By You</Text></>:<><CheckIcon
                                                          id="checkicon"
                                                          mr={"1rem"}
                                                          backgroundColor={
                                                            "green.200"
                                                          }
                                                          onClick={()=>acceptTopic(group.groupID._id,assesment._id)}
                                                          p={1}
                                                          borderRadius={2}
                                                          color={"green"}
                                                          boxSize={6}
                                                        />
                                                        <CloseIcon
                                                        id="checkicon"
                                                          onClick={()=>rejectTopic(group.groupID._id,assesment._id)}
                                                          color={"red"}
                                                          backgroundColor={
                                                            "red.200"
                                                          }
                                                          p={1}
                                                          borderRadius={2}
                                                          boxSize={6}
                                                        /></>
                                                        
                                                      
                                                        }</>:<><Text fontWeight={"bold"} color={"grey"}>Pending</Text></>
                                                        
                                          }
                                                    </Flex>
                                                  </Td>
                                                  <Td>
                                                    <Button
                                                      onClick={()=>showMembersForAssessment(group._id,subject,assesment)}
                                                    >
                                                      Allot Marks
                                                    </Button>
                                                  </Td>
                                                </Tr>

                                                <Modal
                                                  isOpen={mark}
                                                  size={"2xl"}
                                                  onClose={onCloseMark}
                                                >
                                                  {overlay}
                                                  <ModalContent>
                                                    <ModalHeader>
                                                      Group Members
                                                    </ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody>
                                                      <TableContainer>
                                                        <Table size="sm">
                                                          <Thead>
                                                            <Tr>
                                                              <Th>Name</Th>
                                                              <Th>
                                                                Obtained Marks
                                                              </Th>
                                                              <Th>
                                                                Total Marks
                                                              </Th>
                                                            </Tr>
                                                          </Thead>
                                                          <Tbody>
                                                           
                                                            {membersDataAllot?.map(
                                            
                                                              (member) => {
                                                                return (
                                                                  <Tr>
                                                                    <Td>
                                                                      {
                                                                        member.name
                                                                      }
                                                                    </Td>
                                                                    <Td>
                                                                      <Input border={"1px"} borderColor={"whiteAlpha.300"} />
                                                                    </Td>
                                                                    <Td>100</Td>
                                                                  </Tr>
                                                                );
                                                              }
                                                            )}
                                                  
                                                          </Tbody>
                                                        </Table>
                                                      </TableContainer>
                                                    </ModalBody>

                                                    <ModalFooter>
                                                      <Button>Save</Button>
                                                      <Button
                                                        colorScheme="blue"
                                                        ml={3}
                                                        onClick={onCloseMark}
                                                      >
                                                        Close
                                                      </Button>
                                                    </ModalFooter>
                                                  </ModalContent>
                                                </Modal>
                                              </>
                                            );
                                          }
                                        )}
                                      </Tbody>
                                    </Table>
                                  </TableContainer>
                                </AccordionPanel>
                              </AccordionItem>
                        );
                      })}
                      </Accordion>
                    </Box>
                    </TabPanel>
                  );
                })}

             
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseAllSubjects}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    
    </>
  );
};

export default TeacherSubjectSection;
