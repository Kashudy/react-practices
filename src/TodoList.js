import "./TodoList.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ClearIcon from "@mui/icons-material/Clear";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="todoList">
      <h1 className="mainTitle">TODO List</h1>
      <TaskAddition
        onChangeTask={setNewTask}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks setTaskList={setTaskList} taskList={taskList} />
    </div>
  );
}

function TaskAddition({ onChangeTask, taskList, setTaskList }) {
  const [text, setText] = useState("");
  function handleClick() {
    onChangeTask(text);
    setTaskList((taskList) => [...taskList, text]);
    setText("");
  }
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <TextField
        id="standard-basic"
        label="Add item..."
        variant="standard"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton aria-label="add" onClick={handleClick}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
//const taskList = [];
const completedList = [];

function Tasks({ setTaskList, taskList }) {
  function currentTasks(list) {
    return list.map((task, i) => {
      return (
        <div key={i}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Checkbox />
            <p>{task}</p>
            <IconButton
              arial-label="delete"
              key={i}
              onClick={() =>
                setTaskList((taskList) =>
                  taskList.filter((task, index) => index !== i)
                )
              }
            >
              <ClearIcon />
            </IconButton>
          </Stack>
        </div>
      );
    });
  }

  function completedTasks(Tasks) {
    return Tasks.map((task, i) => {
      return (
        <div key={i}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Checkbox disabled checked />
            <p className="completedTask">{task}</p>
            <IconButton aria-label="undo">
              <ReplayRoundedIcon />
            </IconButton>
          </Stack>
        </div>
      );
    });
  }
  return (
    <>
      <div className="taskList">
        <h1 className="listTitle">In Progress</h1>
        {currentTasks(taskList)}
      </div>
      <div className="taskList">
        <h1 className="listTitle">Finished</h1>
        {completedTasks(completedList)}
      </div>
    </>
  );
}

export default TodoList;
