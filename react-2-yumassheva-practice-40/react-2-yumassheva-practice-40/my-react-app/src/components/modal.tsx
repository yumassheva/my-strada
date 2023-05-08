import { useDispatch } from "react-redux";
import Button from "./Button";
import { showModal } from "../store/actions/action";
import { storage } from "/src/js/storage.js";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function ModalM({show}) {
   const style = {
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: 400,
     bgcolor: "background.paper",
     border: "2px solid #000",
     boxShadow: 24,
     p: 4,
   };
    if (!show)
    { return null }
    const dispatch = useDispatch();
    function closerModal() {
      dispatch(showModal(!show));
    }
  const [inputMail, setInputMail] = useState('');
const [inputPass, setInputPass] = useState('');
  const getInputMail = (e) => {
    setInputMail(e.target.value);
    };
     const getInputPass = (e) => {
       setInputPass(e.target.value);
     };
     function sendModal() {
         dispatch(showModal(!show));
         storage.saveMail(inputMail);
          storage.savePass(inputPass);
     }
    return (
        <div>
          <Modal
            open={show}
            onClose={closerModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
               <p>Авторизация</p>
          <p>Почта</p>
          <input type="mail" onChange={getInputMail} />
          <p>Пароль</p>
          <input type="password" onChange={getInputPass} />
          <Button
            onClick={sendModal}
            buttonValue={"Send"}
            buttonClassName={""}
          />
          <Button
            onClick={sendModal}
            buttonValue={"Close"}
            buttonClassName={""}
          />
              </Typography>
            </Box>
          </Modal>
        </div>
    );
}

export { ModalM }
