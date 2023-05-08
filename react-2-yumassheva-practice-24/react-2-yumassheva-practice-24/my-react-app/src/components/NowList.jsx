import NowCity from "./NowCity.jsx"

const NowList = ({ task, temperature, addCity, icon }) => {
  return (
    <div>
      <NowCity
        icon={icon}
        addCity={addCity}
        task={task}
        temperature={temperature}
      />
    </div>
  )
}

export default NowList
