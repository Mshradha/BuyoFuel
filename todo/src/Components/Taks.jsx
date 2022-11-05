import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Taks = (elem) => {
  const handleDelete = (id) => {
    axios
      .delete(`https://stark-mesa-23657.herokuapp.com/delete/${id}`)
      .then((res) => alert("Task Deleted"))
      .catch((err) => console.log(err));
  };
  const handleEdit = (elem) => {
    const payload = { ...elem, status: true };

    axios
      .patch(`https://stark-mesa-23657.herokuapp.com/edit/${elem._id}`, payload)
      .then((res) => console.log("Edited"))
      .catch((err) => console.log(err));
  };
  const getColor = (status) => {
    if (status === true) return "green.400";
    else return "gray.400";
  };

  return (
    <Box
      w="90%"
      m="auto"
      mt="4"
      bg={getColor(elem.status)}
      rounded="lg"
      p="2 "
      display="flex"
      justifyContent="space-between"
    >
      <Text
        fontSize="1.5em"
        fontFamily="sans-serif"
        color="gray.700"
        fontWeight="500"
      >
        {elem.task}
      </Text>
      <Box w="30%" display="flex" justifyContent="space-between">
        <Button onClick={() => handleDelete(elem._id)}>Delete</Button>
        <Button onClick={() => handleEdit(elem)}>Edit</Button>
      </Box>
    </Box>
  );
};

export default Taks;
