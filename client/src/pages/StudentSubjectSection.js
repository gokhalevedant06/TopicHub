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
  Tr,
  Th,
  Td,
  TableContainer,
  Image,

} from '@chakra-ui/react'

import {PhoneIcon, CheckIcon, CloseIcon} from '@chakra-ui/icons'
import subject_picture from '../Assets/Images/Subjects.svg';
const StudentSubjectSection = () => {
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
    <Flex direction={"column"} justify={"center"} align={"center"}>
    <Text text={'center'}  fontWeight={"bold"} fontSize={"2.1rem"} mt={'1rem'} >My Subjects</Text >
            <Image my={"3rem"} src={subject_picture} w={"27%"}></Image>
            <Button m={"1rem"} w={"200px"} colorScheme = 'purple' fontSize={"lg"}> View Subject Details</Button>
    </Flex>

      
    </>
  )
}

export default StudentSubjectSection