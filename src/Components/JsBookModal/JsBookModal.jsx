import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxWidth: "90vw",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

export default function JavascriptBookModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ fontSize: 18, padding: "50px 90px", minWidth: 300 }}
      >
        {t("JavascriptBookModal.js__book_title")}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("JavascriptBookModal.js__book_title")}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>{t("JavascriptBookModal.js__history_title")}:</strong>
          </Typography>
          <Typography sx={{ mt: 1 }}>
            {t("JavascriptBookModal.js__history")}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>{t("JavascriptBookModal.js__syntax_title")}:</strong>
          </Typography>
          <Typography sx={{ mt: 1, whiteSpace: "pre-line" }}>
            {t("JavascriptBookModal.js__syntax")}
          </Typography>
          <Button sx={{ mt: 2, color: "blue" }} onClick={handleClose}>
            {t("JavascriptBookModal.close_js_syntax")}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
