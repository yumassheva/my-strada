function Checkbox({title, onChange}) {
    return (
      <label>
        <input
          type="checkbox"
          value={title}
          onChange={onChange}
            />
            {title}
      </label>
    );
}

export default Checkbox;
