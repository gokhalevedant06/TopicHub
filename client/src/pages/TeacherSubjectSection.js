import React,{useState} from 'react'
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
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

} from '@chakra-ui/react'

import {PhoneIcon, CheckIcon, CloseIcon} from '@chakra-ui/icons'
const TeacherSubjectSection = () => {
    const { isOpen:createSubject, onOpen:createSubjectOnOpen, onClose:createSubjectOnClose } = useDisclosure()
    const { isOpen:isOpenAllSubjects, onOpen:onOpenAllSubjects, onClose:onCloseAllSubjects } = useDisclosure()
    const { isOpen:isOpenAssessment, onOpen:onOpenAssessment, onClose:onCloseAssessment } = useDisclosure()
    const { isOpen:mark, onOpen:onOpenMark, onClose:onCloseMark } = useDisclosure()
    const OverlayOne = () => (
        <ModalOverlay
          bg='rgba(92,103, 119, 0.8)'
          backdropFilter='blur(10px)'
        />
      )
      const [overlay, setOverlay] = useState(<OverlayOne />)
  return (
    <>
    <Flex justify={"center"}>
        <Flex backgroundColor={"red"} wrap={"wrap"}  width={"80%"} mt={"5rem"}>
            <Box width={"30%"} height={"400px"} backgroundColor={"blue"}>
                Image
            </Box>
            <Flex flexDirection={"column"} width={"70%"} justify={"center"} align={"center"}>
                <Box>

              <Button m={"1rem"} w={"200px"} onClick={() => {
          setOverlay(<OverlayOne />)
          createSubjectOnOpen()
        }} >Create Subject</Button>
              <Button m={"1rem"} w={"200px"} onClick={onOpenAllSubjects}>View Subject Details</Button>
                </Box>
                <Box>

              <Button m={"1rem"} w={"200px"}>Delete Subject</Button>
              <Button m={"1rem"} w={"200px"}>Update Subject Details</Button>
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
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Enter Title' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter Description' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
  <Select placeholder='Select Subject Teacher'>
  <option value='option1'>Teacher 1</option>
  <option value='option2'>Teacher 2</option>
  <option value='option3'>Teacher 3</option>
</Select>
</Stack>
          </ModalBody>
          <ModalFooter>
            <Button mx={'1rem'} colorScheme={"green"}>Create Subject</Button>
            <Button colorScheme={"red"} onClick={createSubjectOnClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Modal scrollBehavior={'inside'}  onClose={onCloseAllSubjects} size={"6xl"}  isOpen={isOpenAllSubjects}>
        {overlay}
        <ModalContent >
          <ModalHeader>Subject Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>One</Tab>
    <Tab>One</Tab>
    <Tab>One</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Flex justify={"center"}>
      <Flex justify={"center"} width={"40%"}>
        <Text>Image</Text>
      </Flex>
      <Flex  flexDirection={"column"} width={"60%"}>
        <Text >Title</Text>
        <Text>Description</Text>
        <Text>Teacher Name</Text>
        <Flex>
          <Button onClick={onOpenAssessment} my={"1rem"} mr={"1rem"} colorScheme={"green"}>Create Assesment</Button>
        </Flex>
      </Flex>

      </Flex>
      <Text>Previous/On Going Assessments</Text>
      <Box >

      <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Assessment 1 Title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box>
        <Text>Title</Text>
        <Text>Description</Text>
      </Box>

      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Group Number</Th>
        <Th>Topic Name</Th>
        <Th >Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Sign Language Detection using Deep Learning</Td>
        <Td>
          <Flex align={"center"}>
          <CheckIcon mr={"1rem"} backgroundColor={"green.200"} p={1} borderRadius={2} color={"green"} boxSize={6}/>
          <CloseIcon color={"red"} backgroundColor={"red.200"} p={1} borderRadius={2} boxSize={6} />
          </Flex>
        </Td>
        <Td><Button onClick={onOpenMark}>Allot Marks</Button></Td>
      </Tr>
      <Tr>
        <Td>1</Td>
        <Td>Sign Language Detection using Deep Learning</Td>
        <Td>
          <Flex align={"center"}>
          <CheckIcon mr={"1rem"} backgroundColor={"green.200"} p={1} borderRadius={2} color={"green"} boxSize={6}/>
          <CloseIcon color={"red"} backgroundColor={"red.200"} p={1} borderRadius={2} boxSize={6} />
          </Flex>
        </Td>
        <Td><Button onClick={onOpenMark}>Allot Marks</Button></Td>
      </Tr>
     
    </Tbody>
    
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Assessment 1 Title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box>
        <Text>Title</Text>
        <Text>Description</Text>
      </Box>

      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Group Number</Th>
        <Th>Topic Name</Th>
        <Th >Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Sign Language Detection using Deep Learning</Td>
        <Td>
          <Flex align={"center"}>
          <CheckIcon mr={"1rem"} backgroundColor={"green.200"} p={1} borderRadius={2} color={"green"} boxSize={6}/>
          <CloseIcon color={"red"} backgroundColor={"red.200"} p={1} borderRadius={2} boxSize={6} />
          </Flex>
        </Td>
        <Td><Button onClick={onOpenMark}>Allot Marks</Button></Td>
      </Tr>
      <Tr>
        <Td>1</Td>
        <Td>Sign Language Detection using Deep Learning</Td>
        <Td>
          <Flex align={"center"}>
          <CheckIcon mr={"1rem"} backgroundColor={"green.200"} p={1} borderRadius={2} color={"green"} boxSize={6}/>
          <CloseIcon color={"red"} backgroundColor={"red.200"} p={1} borderRadius={2} boxSize={6} />
          </Flex>
        </Td>
        <Td><Button onClick={onOpenMark} >Allot Marks</Button></Td>
      </Tr>
     
    </Tbody>
    
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <Modal isOpen={mark} size={"2xl"} onClose={onCloseMark}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Obtained Marks</Th>
        <Th>Total Marks</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Vedant Gokhale</Td>
        <Td><Input/></Td>
        <Td >100</Td>
      </Tr>
      <Tr>
        <Td>Vedant Gokhale</Td>
        <Td><Input/></Td>
        <Td >100</Td>
      </Tr>
      <Tr>
        <Td>Vedant Gokhale</Td>
        <Td><Input/></Td>
        <Td >100</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button>Save</Button>
            <Button colorScheme='blue' mr={3} onClick={onCloseMark}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      

</Accordion>

      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseAllSubjects}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      <Modal isOpen={isOpenAssessment} onClose={onCloseAssessment}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter New Assessment Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Enter Title' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter Description' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter Total Marks' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
</Stack>

          </ModalBody>

          <ModalFooter>
            <Button >Create Assessment</Button>
            <Button colorScheme='blue' mr={3} onClick={onCloseAssessment}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      
    </>
  )
}

export default TeacherSubjectSection