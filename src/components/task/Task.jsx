import { useDispatch } from "react-redux";
import { handleCheckbox, deleteTask } from "../redux/todoSlice";
import "./task.css";
import trash from "../../assets/trash.png";
const Task = ({ task, index }) => {
  const dispatch = useDispatch();

  const today = new Date();
  const taskDate = new Date(task.date);
  let classN = "";
  if (taskDate < today && !task.isCompleted) {
    classN = "yellowColor";
  } else if (task.isCompleted) {
    classN = "greenColor";
  } else {
    classN = "none";
  }

  const handleCheckboxChange = () => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    dispatch(handleCheckbox({ index, task: updatedTask }));
  };
  return (
    <div className="card">
      <div className={`task ${classN}`}>
        <input
          className="checkBoxForStatus"
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheckboxChange}
        />
        <span className="spaceAfterElement">
          <b>{task.work}</b>
        </span>
        <span className=" spaceAfterElement date">| &nbsp; {task.date}</span>
        <span className="spaceAfterElement">| &nbsp; {task.description}</span>
        <img
          src={trash}
          alt="delete"
          className="delete"
          onClick={() => dispatch(deleteTask(index))}
        />
      </div>
    </div>
  );
};
export default Task;
