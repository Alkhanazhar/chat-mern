import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => setShow(!show);

  return (
    <VStack spacing={"5px"}>
      {/*sign form */}
      <FormControl>
        {/*email */}
        <FormLabel>email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>{" "}
      <FormControl>
        <FormLabel>password</FormLabel>

        <InputGroup>
          {/*password */}
          <Input
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={!show ? "password" : "text"}
          />
          <InputRightElement width="4.5rem">
            <Button colorScheme="blue" size={"sm"} onClick={handleClick}>
              {!show ? "show" : "hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>{" "}
      <Button width={"100%"} marginTop={15} colorScheme="blue">
        Login
      </Button>{" "}
      <Button
        width={"100%"}
        colorScheme={"red"}
        variant={"solid"}
        marginTop={15}
        onClick={() => {
          setPassword("12345678");
          setEmail("guest@email.com");
        }}
      >
        guest login
      </Button>
    </VStack>
  );
};

export default Login;
