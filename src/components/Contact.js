import React, { useState } from "react";
import "./styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from "sweetalert";
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

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [{ inputValue = "+639273997057" }, setInputValue] = useState("");
  const [{ emailValue = "leindonreimohdilan@yahoo.com" }, setEmailValue] =
    useState("");

  const onClipboardAlert = () => {
    swal("Copied!", "Contact Number has been copied to Clipboard", "success");
  };
  const onClipboardAlertEmail = () => {
    swal("Copied!", "Email Address has been copied to Clipboard", "success");
  };

  return (
    <div className="section-contact">
      <div className="contact-top">
        <h3>Ways to Contact Me</h3>
      </div>

      <div className="contact-bot">
        {/* email */}
        <div className="Button-Contacts email-button">
          <div className="email-href">
            <a href="mailto: leindoneimohdilan@yahoo.com">
              <Button className="email-href">
                <p>Email</p>
              </Button>
            </a>
          </div>
          <div className="emailcopyIcon">
            <CopyToClipboard text={emailValue}>
              <Button className="email-copy" onClick={onClipboardAlertEmail}>
                <i className="bi bi-clipboard i-email">copy</i>
              </Button>
            </CopyToClipboard>
          </div>
        </div>
        {/* email */}
        {/* Phone */}
        <div className="Button-Contacts phone">
          <Button className="phone-button" onClick={handleOpen}>
            <p> Phone</p>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                className="phone-h2"
                variant="h6"
                component="h2"
              >
                Phone Number
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input
                  type="text"
                  className="phone-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled
                />
              </Typography>
              <CopyToClipboard text={inputValue}>
                <Button className="phone-copy" onClick={onClipboardAlert}>
                  <i className="bi bi-clipboard">copy</i>
                </Button>
              </CopyToClipboard>
            </Box>
          </Modal>
        </div>
        {/* Phone */}
        {/* skype */}
        <div className="Button-Contacts ">
          <div className="skype">
            <a href="skype:https://join.skype.com/invite/q2XEWAdsUFpd">
              <p>SKYPE</p>
            </a>
          </div>
        </div>
        {/* skype */}
        {/* facebook */}
        <div className="Button-Contacts">
          <div className="fb">
            <a href="https://www.facebook.com/leindonlemoh/" target="_blank">
              <p>Facebook</p>
            </a>
          </div>
        </div>
        {/* facebook */}
      </div>
    </div>
  );
};

export default Contact;
