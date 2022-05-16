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
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from '@chakra-ui/react'

import {PhoneIcon, CheckIcon} from '@chakra-ui/icons'
const TeacherSubjectSection = () => {
    const { isOpen:createSubject, onOpen:createSubjectOnOpen, onClose:createSubjectOnClose } = useDisclosure()
    const { isOpen:isOpenAllSubjects, onOpen:onOpenAllSubjects, onClose:onCloseAllSubjects } = useDisclosure()
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


      <Modal  onClose={onCloseAllSubjects} size={"6xl"}  isOpen={isOpenAllSubjects}>
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
      <p>one!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseAllSubjects}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TeacherSubjectSection