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
  const [taskHistory, setTaskHistory] = useState([]);
  return (
    <div className="todoList">
      <h1 className="mainTitle">TODO List</h1>
      <TaskAddition
        onChangeTask={setNewTask}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks
        setTaskList={setTaskList}
        taskList={taskList}
        taskHistory={taskHistory}
        setTaskHistory={setTaskHistory}
      />
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

function Tasks({ setTaskList, taskList, setTaskHistory, taskHistory }) {
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
            <Checkbox onChange={() => handleCheckBox(task, i)} />
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
  function handleCheckBox(task, i) {
    setTaskHistory((taskHistory) => [task, ...taskHistory]);
    setTaskList((taskList) => taskList.filter((task, index) => index !== i));
  }

  function completedTasks(historyList) {
    return historyList.map((task, i) => {
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
            <IconButton
              aria-label="undo"
              onClick={() => handleUndoButton(task, i)}
            >
              <ReplayRoundedIcon />
            </IconButton>
          </Stack>
        </div>
      );
    });
    function handleUndoButton(task, i) {
      setTaskHistory((taskHistory) =>
        taskHistory.filter((task, index) => index !== i)
      );
      setTaskList((taskList) => [...taskList, task]);
    }
  }
  return (
    <>
      <div className="taskList">
        <h1 className="listTitle">In Progress</h1>
        {currentTasks(taskList)}
      </div>
      <div className="taskList">
        <h1 className="listTitle">Finished</h1>
        {completedTasks(taskHistory)}
      </div>
    </>
  );
}

export default TodoList;
