import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./mobile.css";
// import img from "../img/logo.svg";
// import img1 from "../img/Group3.svg";
// import img2 from "../img/hero-phones.png";

const style = {
  position: "relative",
  // top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 327,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="Mobile">
        <div className="container">
          <div className="Nav">
            <div className="na">
              <div className="img-mobie">
                <img
                  src="https://centurysilkroadtravel.uz/assets/vizitka-VjlmDffM.jpg"
                  alt=""
                />
                <div className="h1-mobile">
                  CENTURY SILK
                  <br />
                  ROAD TRAVEL
                </div>
              </div>
              <Button onClick={handleOpen} className="btn-mobile">
                {open ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </Button>
            </div>
          </div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-description"
                  className="containert"
                  sx={{ mt: 2 }}
                >
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </>
  );
}
