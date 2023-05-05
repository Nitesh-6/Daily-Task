import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../components/redux/todoSlice";
import "./userInput.css";

const UserInput = () => {
  const [work, setWork] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask({ work, description, date, isCompleted }));
    setWork("");
    setDescription("");
    setDate("");
    setIsCompleted(false);
  };

  return (
    <div className="userInput">
      <form onSubmit={handleAdd}>
        <label>Task:</label>
        <input
          type="text"
          className="inputStyle"
          value={work}
          onChange={(e) => setWork(e.target.value)}
          required
          maxLength={15}
          placeholder="Enter your Task"
        />

        <label>Description:</label>
        <textarea
          rows="2"
          placeholder="Enter your Description"
          className="inputStyle1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Date:</label>
        <input
          type="date"
          value={date}
          className="dateInput"
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <div className="buttons">
          <button type="submit" className="subbmit">
            Add
          </button>
          <button
            type="button"
            className="clear"
            onClick={() => {
              setWork("");
              setDescription("");
              setDate("");
              setIsCompleted(false);
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};
export default UserInput;
