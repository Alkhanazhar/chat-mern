import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import axios from "axios";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useNavigate();

  const postDetails = async (pics) => {
    try {
      setLoading(true);
      if (pics === undefined) {
        toast({
          title: "Please select your picture here before continuing",
          isClosable: true,
          duration: 3000,
          position: "bottom",
        });
      }
      const formData = new FormData();
      formData.append("file", pics);
      formData.append("upload_preset", "chat-app");
      formData.append("cloud_name", "dhbz08p8u");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dhbz08p8u/image/upload",
        formData
      );
      console.log(formData);
      setPic(response.data.url.toString());
      console.log(response.data.url);
      setLoading(false);
      console.log("Uploaded image URL:", response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleClick = () => setShow(!show);
  const handleSubmit = async () => {
    try {
      const { data} = await axios.post("/api");
      toast({
        title: "sign up successfully...",
        isClosable: true,
        duration: 3000,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history("/chat")
    } catch (error) {}
  };
  return (
    <VStack spacing={"5px"}>
      {/*sign form */}
      <FormControl>
        {/*name */}
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>{" "}
      <FormControl>
        {/*email */}
        <FormLabel>email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>{" "}
      <FormControl>
        <FormLabel>password</FormLabel>

        <InputGroup>
          {/*password */}
          <Input
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type={!show ? "password" : "text"}
          />
          <InputRightElement width="4.5rem">
            <Button colorScheme="blue" size={"sm"} onClick={handleClick}>
              {!show ? "show" : "hide"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>{" "}
      <FormControl>
        {/*confirm password */}
        <FormLabel>confirm password</FormLabel>
        <Input
          placeholder="re Enter your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>{" "}
      <FormControl>
        {/*pic */}
        <FormLabel>confirm password</FormLabel>
        <Input
          type="file"
          placeholder="re Enter your password"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button width={"100%"} marginTop={15} isLoading={loading}>
        SignUp
      </Button>
    </VStack>
  );
};

export default SignUp;
