import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../store/actions/action";
import { storage } from "/src/js/storage.js";
import { Link } from "react-router-dom";
import { ModalM } from "./modal";

function Header() {
  const enter = "Login";
  const exit = "Exit";
 
  let buttonAutorizationValue = enter;

  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducerNav.show);

  function changeShowforModal() {
    dispatch(showModal(!show));
  }

  if (storage.getMail()) {
    buttonAutorizationValue = exit;
  }
  return (
    <div className="head">
      <Link to={"/"}>
        <Button variant="contained">Home</Button>
      </Link>
      <Link to={"/search"}>
        <Button variant="contained">Search</Button>
      </Link>
      <Button onClick={changeShowforModal} variant="contained">
        {buttonAutorizationValue}
      </Button>
      <ModalM show={show} />
    </div>
  );
}

export default Header;
