function OptionSelect({ id, option , value}) {
  return <option value={value} key={id}>{option}</option>;
}

export default OptionSelect;
