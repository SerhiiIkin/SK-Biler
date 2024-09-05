import { Button as btn } from "@mui/material";
import { styled } from "@mui/system";

export const Button = styled(btn)(({ theme }) => ({
  color: theme.vars.palette.text.default,
}));

