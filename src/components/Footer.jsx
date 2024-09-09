import { useState } from "react";

import { Button } from "@customMUI/Button";
import { Link } from "@customMUI/Link";
import { Typography } from "@customMUI/Typography";

import pdf from "@assets/sk-biler.pdf";

import { footerLinks } from "@variables/footerLinks";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Box,
  Container,
  Grid2 as Grid,
  List,
  ListItem,
  Popover,
} from "@mui/material";

const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleOpenPDF = () => {
    window.open(pdf, "_blank");
  };

  return (
    <Box id="footer" component="footer" sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            size={{ xs: 12, sm: 4 }}
          >
            <Typography variant="h6">
              <Link href="#">SK biler</Link>
            </Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent={"right"}
            size={{ xs: 12, sm: 8 }}
          >
            <List>
              <ListItem>
                <Typography component="span">Nyttige links:</Typography>
              </ListItem>
              {footerLinks.map((link) => (
                <ListItem key={link.id}>
                  <Link href={link.link} target="_blank">
                    {link.name}
                  </Link>
                </ListItem>
              ))}

              <ListItem>
                <Button
                  sx={{
                    fontSize: 14,
                    fontWeight: "normal",

                    p: 0,
                  }}
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  onClick={handleOpenPDF}
                >
                  <PictureAsPdfIcon />
                  <Typography component="span" sx={{ ml: 1 }}>
                    Læs mere om SK biler
                  </Typography>
                </Button>
                <Popover
                  id="mouse-over-popover"
                  sx={{ pointerEvents: "none" }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography sx={{ p: 1, color: "black" }}>
                    Tryk for at se PDF
                  </Typography>
                </Popover>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
