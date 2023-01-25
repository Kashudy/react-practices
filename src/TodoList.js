import "./TodoList.css";

function TodoList() {
  const currentTasks = ["learn React", "cook dinner", "take a shower"];
  const finishedTaskList = ["start a new project", "wash dishes"];
  return (
    <>
      <h1 className="mainTitle">TODO List</h1>
      <TaskAddition />
      <Tasks currentTasks={currentTasks} finishedTaskList={finishedTaskList} />
    </>
  );
}

function TaskAddition() {
  return (
    <form className="TaskAddition">
      <input
        action="text"
        className="taskTextInput"
        placeholder="Add Item..."
      ></input>
      <button className="addButton">Add</button>
    </form>
  );
}

function Tasks({ currentTasks, finishedTaskList }) {
  function taskList(tasks) {
    return tasks.map((task) => {
      return (
        <div className="taskSection">
          <button>Done</button>
          <ul>{task}</ul>
          <button>Delete</button>
        </div>
      );
    });
  }
  function finishedTasksList(finishedTasks) {
    return finishedTasks.map((task) => {
      return (
        <div className="taskSection">
          <ul>{task}</ul>
          <button>Undo</button>
        </div>
      );
    });
  }
  return (
    <>
      <div className="taskInProgress">
        <h1 className="listTitle">In Progress</h1>
        {taskList(currentTasks)}
      </div>
      <div className="finishedTasks">
        <h1 className="listTitle">Finished</h1>
        {finishedTasksList(finishedTaskList)}
      </div>
    </>
  );
}

export default TodoList;
