import { useSelector } from "react-redux";
import "./taskList.css";
import Footer from "../footer/Footer";
import Task from "../task/task";
import info from "../../assets/info.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const TaskList = () => {
  const today = new Date();

  const tasks = useSelector((state) => state.todo.tasks);
  let completedTaks = 0;
  let pendingTasks = 0;
  let overdewTasks = 0;

  tasks.map((task) => {
    const taskDate = new Date(task.date);
    if (taskDate < today && !task.isCompleted) {
      console.log("Testing1");
      overdewTasks = overdewTasks + 1;
      console.log("Testing2", overdewTasks);
    } else if (taskDate > today && !task.isCompleted) {
      pendingTasks = pendingTasks + 1;
    } else {
      completedTaks = completedTaks + 1;
    }
  });
  return (
    <div className="taskList">
      <img id="infoTasks" src={info} alt="info" className="information" />
      <ReactTooltip anchorId="infoTasks" place="left">
        <span>
          No. of Tasks Completed: <strong>{completedTaks}</strong>
        </span>{" "}
        <hr />
        <span>
          No. of Tasks pending: <strong>{pendingTasks}</strong>
        </span>{" "}
        <hr></hr>
        <span>
          No. of Tasks overdew: <strong>{overdewTasks}</strong>
        </span>
      </ReactTooltip>
      {tasks.map((task, index) => {
        return (
          <div key={index} className="IDVTask">
            <Task task={task} index={index} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};
export default TaskList;
