// eslint-disable-next-line import/no-unresolved
import { useContext } from "react";
import { Context } from "./Context.js";

function NowTask({ id, addCity}) {
  const [icon,
    setIcon,
    temperature,
    setTemp,
    city,
    setCity,
    deleteCity] = useContext(Context);
  return (
    <div className='nowTab'>
      <div name={id} className="temp">
        <img className="icon" src={icon} alt="ops"/>
        {temperature}
      </div>
      <div className="city">
        <p>{city}</p>
        <button className="" onClick={() => addCity({ id: String(Date.now()), task: city  })}>
          Like
        </button>
      </div>
    </div>
  );
}

export default NowTask;
