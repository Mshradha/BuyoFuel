import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Taks from "../Components/Taks";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const getData = () => {
    axios
      .get("https://stark-mesa-23657.herokuapp.com/")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [todos]);

  const handleAddTask = () => {
    if(task){
      const payload = {
        task,
        status: false,
      };
      axios
        .post("https://stark-mesa-23657.herokuapp.com/post", payload)
        .then((res) => {
          alert("Task Added Successfully");
          setTask("");
        })
  
        .catch((err) => console.log(err));

    }
   
  };

  const handleClearAll = () => {
    axios.delete("https://stark-mesa-23657.herokuapp.com/remove")
    .then((res)=> alert("Removed All "))
    .catch((err)=> console.log(err))
  }

  return (
    <Box bg="blue.300" w="100vw" h="100vh " display='flex' alignItems='center'>
    
      <Box
        display="flex"
        bg="white"
        flexDirection="column"
        w={{ base: "90%", sm: "90%", md: "70%", lg: "40%" }}
        boxShadow="xl"
        rounded="lg"
        m="auto"
       p='4'
       
      >
      <Text fontSize={{base:'sm', md:'xl', lg:'2xl'}} fontWeight='700' ml='10px'>Todo App</Text>
        <Box display="flex" w="90%" m="auto" mt="50px">
          <Input
            placeholder="Add Todo"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={() => handleAddTask()}>+</Button>
        </Box>

        <Box>
          {todos.map((elem) => (
            <Taks key={elem.id} {...elem} />
          ))}
        </Box>
      
       
        <Button bg='red' color='white' m='auto' mt='4' onClick={handleClearAll}>Clear All</Button>
       
      </Box>
    </Box>
  );
};

export default Todo;
