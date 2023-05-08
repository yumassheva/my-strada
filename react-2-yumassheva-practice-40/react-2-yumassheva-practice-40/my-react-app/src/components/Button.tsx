
function Button({ buttonValue, buttonClassName, onClick }) {
    return (
      <button onClick={onClick} className={buttonClassName} >
          {buttonValue}
        </button>
  );
}

export default Button;
