import react, { useEffect } from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/footer";
import Issue from "./Issue";

import {
    Container,
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Select,
    Input,
    InputGroup,
    InputLeftElement,
    Image
} from '@chakra-ui/react'

const IssuePage = () => {

    return (
        <div style={{ width: "100%" }}>
            <Header />
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                <Issue />
            </Box>
            <Footer />
        </div>
    )
};

export default IssuePage;