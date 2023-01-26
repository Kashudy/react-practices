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

function TodoList() {
  const currentTasks = ["learn React", "cook dinner", "take a shower"];
  const finishedTaskList = ["start a new project", "wash dishes"];
  return (
    <div className="todoList">
      <h1 className="mainTitle">TODO List</h1>
      <TaskAddition />
      <Tasks currentTasks={currentTasks} finishedTaskList={finishedTaskList} />
    </div>
  );
}

function TaskAddition() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <TextField id="standard-basic" label="Add item..." variant="standard" />
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
    </Stack>
  );
}

function Tasks({ currentTasks, finishedTaskList }) {
  function taskList(tasks) {
    return tasks.map((task) => {
      return (
        <div>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Checkbox />
            <p>{task}</p>
            <IconButton arial-label="delete">
              <ClearIcon />
            </IconButton>
          </Stack>
        </div>
      );
    });
  }
  function finishedTasksList(finishedTasks) {
    return finishedTasks.map((task) => {
      return (
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
      );
    });
  }
  return (
    <>
      <div className="taskList">
        <h1 className="listTitle">In Progress</h1>
        {taskList(currentTasks)}
      </div>
      <div className="taskList">
        <h1 className="listTitle">Finished</h1>
        {finishedTasksList(finishedTaskList)}
      </div>
    </>
  );
}

export default TodoList;
