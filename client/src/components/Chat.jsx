import axios from "axios";
import React, { useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";

const Chat = () => {
  const fetchData = async () => {
    try {
      const data = await axios.get("/api/chat");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        bg={"white"}
        m={"40px 0 15px 0"}
        borderRadius="lg"
        borderWidth={"1px"}
        p={"3"}
        w={"100%"}
      >
        <Text fontSize={"4xl"}>talk talk</Text>
      </Box>
      <Box bg={"white"} p={"4"} w={"100%"} borderRadius="lg">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Sign up</Tab>
            <Tab width={"50%"}>Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <SignUp />
            </TabPanel>
            <TabPanel>
              <Login />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Chat;
