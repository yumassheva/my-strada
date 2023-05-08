import OptionSelect from "./OptionSelect";

function Select({ title, listOfOptions, onChange}) {
  return (
    <>
      <p>{title}</p>
      <select onChange={onChange}>
        {listOfOptions.map(({ id, option }) => (
          <OptionSelect value={option} key={id} id={id} option={option} />
        ))}
      </select>
    </>
  );
}

export default Select;

