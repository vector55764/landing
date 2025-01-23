import { Box, Modal } from "@mui/material";
import { ReactElement } from "react";

const container = {
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

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactElement;
}

export const ProductModal = ({ open, handleClose, children }: IModalProps) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={container}>{children}</Box>
      </Modal>
    </>
  );
};
