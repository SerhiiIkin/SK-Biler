import { Typography as p } from "@mui/material";
import { styled } from "@mui/system";

export const Typography = styled(p)(({ theme }) => ({
  color: theme.vars.palette.text.default,
}));
