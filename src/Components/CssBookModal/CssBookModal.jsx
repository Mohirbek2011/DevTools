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
  borderRadius: "12px",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button
        sx={{ fontSize: 18, padding: "50px 90px", minWidth: 300 }}
        variant="contained"
        onClick={handleOpen}
      >
        {t("CssBookModal.css__book_title")}
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={style}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {t("CssBookModal.css__book_title")}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            {t("CssBookModal.css__history_title")}
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line", mt: 1 }}>
            {t("CssBookModal.css__history")}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            {t("CssBookModal.css__selectors_title")}
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line", mt: 1 }}>
            {t("CssBookModal.css__selectors")}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            {t("CssBookModal.css__properties_title")}
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line", mt: 1 }}>
            {t("CssBookModal.css__properties")}
          </Typography>

          {/* Кнопка теперь синего цвета */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ mt: 3 }}
          >
            {t("CssBookModal.close_css_properties")}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
