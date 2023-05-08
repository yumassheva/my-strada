import { useContext } from "react";
import { Context } from "./Context.js";
import storage from "./storage.js";

function Task({ id, task, requestWeather }) {
  async function showTemp(task) {
    try {
      storage.saveLastChooseCity([ task ]);
      requestWeather(task);
    } catch (error) {
      console.error(error);
    }
  }
  const [icon,
    setIcon,
    temperature,
    setTemp,
    city,
    setCity,
    deleteCity] = useContext(Context);
  return (
    <div className="localCity">
      <button onClick={() => showTemp(task)} name={id}>
        {task}
      </button>
      <button className="" onClick={() => deleteCity(id)}>
        +
      </button>
    </div>
  );
}

export default Task;
