import { useContext } from "react";
import { Context } from "./Context.js";
const DetailsTab = (id) => {
  const [icon,
    setIcon,
    temperature,
    setTemp,
    city,
    setCity,
    deleteCity,
    feels,
    setFeelsLike,
    sunrise,
    setSunrise,
    sunset,
    setSunset] = useContext(Context);
  return (
    <div className='nowTab'>
      <ul name={id} >
        <li>{feels}</li>
        <li>{sunrise}</li>
        <li>{sunset}</li>
      </ul>
    </div>
  )
};
export default DetailsTab;