import UserInput from "../user-input/UserInput";
import TaskList from "../task-list/TaskList";

const MainContent=()=>{
    return(
        <div className="MainContent">
            <UserInput/>
            <TaskList/>
        </div>
    )
}
export default MainContent;