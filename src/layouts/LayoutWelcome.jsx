import { PropTypes } from "prop-types";

import { Box, styled } from "@mui/material";

const LayoutWelcome = ({ img, children, ...rest }) => {
  const LayoutWelcomeComponent = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${img})`,
    minHeight: "calc(100dvh - 56px)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "-200px 0",
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "0",
      minHeight: "calc(100dvh - 64px)",
    },
  }));
  return (
    <LayoutWelcomeComponent {...rest}> {children} </LayoutWelcomeComponent>
  );
};

export default LayoutWelcome;

LayoutWelcome.propTypes = {
  img: PropTypes.string,
  children: PropTypes.node,
};
