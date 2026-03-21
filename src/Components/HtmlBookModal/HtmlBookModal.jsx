import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "./HtmlBookModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600, // Увеличил ширину
  maxWidth: "90vw", // Чтобы не выходило за границы экрана
  bgcolor: "background.paper",
  borderRadius: "12px", // Сделал края более закругленными
  boxShadow: 24,
  p: 4, // Больше отступов внутри
  maxHeight: "90vh", // Увеличил максимальную высоту
  overflowY: "auto",
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        {t("HtmlBookModal.html__atributs_title")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <h2 id="child-modal-title">
            {t("HtmlBookModal.html__atributs_title")}
          </h2>
          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", fontSize: "1.2rem" }}
          >
            {t("HtmlBookModal.htmlatribus")}
          </Typography>

          <Button onClick={handleClose}>
            {t("HtmlBookModal.close_html_atributs")}
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function HtmlBookModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

  return (
    <>
      <section className="HtmlBookModal">
        <div className="container">
          <div className="HtmlBookModal__wrapper">
            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{ fontSize: 22, padding: "20px 40px", minWidth: 300 }}
            >
              {t("HtmlBookModal.html__book_title")}
            </Button>
          </div>
        </div>
      </section>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("HtmlBookModal.html__book_title")}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            📜 {t("HtmlBookModal.html__history_title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", fontSize: "1.2rem" }}
          >
            {t("HtmlBookModal.html__history")}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            🏷️ {t("HtmlBookModal.html__tag_title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", fontSize: "1.2rem" }}
          >
            {t("HtmlBookModal.HtmlTags")}
          </Typography>

          <ChildModal />
        </Box>
      </Modal>
    </>
  );
}
