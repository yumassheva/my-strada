import {
  setLastCity,
} from "../store/action"
import { useDispatch , useSelector} from "react-redux"

const Task = ({ id, task, deleteCity, requestWeather }) => {
  const dispatch = useDispatch();
  let chooseLastCity = useSelector(state => state.chooseLastCity);
  async function showTemp(task) {
    try {
      requestWeather(task)
    }
    catch (error) {
      console.error(error)
    }
    dispatch(setLastCity(!chooseLastCity))
  }
  return (
    <div className='localCity'>
      <button onClick={() => showTemp(task)}>
        <label>
          {task}
        </label>
      </button>
      <button className="" onClick={() => deleteCity(id)}>
        +
      </button>
    </div>
  )
}

export default Task