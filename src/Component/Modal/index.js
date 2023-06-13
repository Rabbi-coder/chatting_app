import React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import "./style.css";
import UploadProfilePicture from "../UploadProfilePicture";

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
const Modals = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modals">
            <UploadProfilePicture setOpen={setOpen} />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Modals;
