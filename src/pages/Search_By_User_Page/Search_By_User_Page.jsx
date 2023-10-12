import react, { useEffect } from "react"
import Header from "../../Header/Header";
import Footer from "../../Footer/footer";
import SearchByUser from "./Search_By_User";
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

const SearchByUserPage = () => {

    return (
        <div style={{ width: "100%" }}>
            <Header />
            <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                <SearchByUser />
            </Box>
            <Footer />
        </div>
    )
};

export default SearchByUserPage;