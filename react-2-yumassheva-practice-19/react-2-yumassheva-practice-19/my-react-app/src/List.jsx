import Task from "./Task.jsx";

function List({ cites, requestWeather }) {
  return (
    <div className="list">
      <p>Favorite Cities:</p>
      {cites.map(({ id, task }) => (
        <Task
          key={id}
          id={id}
          task={task}
          requestWeather={requestWeather}
        />
      ))}
    </div>
  );
}

export default List;
