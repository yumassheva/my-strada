import NowTask from "./NowTask.jsx";

function NowList({ addCity, city}) {
  return (
    <>
      <NowTask
        addCity={addCity}
        city={city}
      />
    </>
  );
}

export default NowList;
