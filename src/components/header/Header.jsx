import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  console.log("tasks are", tasks)
  return (
    <div className="header">
      <div className="mainLogo">
        <a href="" className="logo">
          CompanyLogo
        </a>
      </div>
      <div className="title">
        <h1>Daily Tasks</h1>
      </div>
      <span className="count">No. of Tasks: <strong>{tasks.length}</strong> </span>
    </div>
  );
};
export default Header;

