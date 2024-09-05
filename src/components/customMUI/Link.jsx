import PropTypes from "prop-types";

import { Link as MLink } from "@mui/material";

export const Link = ({ href, children, ...rest }) => {
  return (
    <MLink
      underline="none"
      color="inherit"
      href={href}
      sx={(theme) => ({
        color: theme.vars.palette.text.default,
        transition: "color 0.3s ease",
        [theme.breakpoints.up("lg")]: {
          "&:hover": {
            color: theme.vars.palette.primary.main,
          },
        },
      })}
      {...rest}
    >
      {children}
    </MLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};
