import { Typography } from "@customMUI/Typography";

import LayoutWelcome from "@layouts/LayoutWelcome";

import welcomeImg from "@assets/welcome.jpg";

import { Container } from "@mui/material";

const Welcome = () => {
  return (
    <LayoutWelcome
      component="section"
      id="welcome"
      img={welcomeImg}
      sx={{ display: "grid", placeItems: "center" }}
    >
      <Container
        sx={(theme) => ({
          pb: { xs: 15, sm: 9 },
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
          ...(theme.palette.mode === "dark" && {
            background: theme.vars.palette.background.text,
          }),
          ...(theme.palette.mode === "light" && {
            background: theme.vars.palette.background.text,
          }),
        })}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          Velkommen til SK Biler
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.3rem", md: "2rem" },
          }}
        >
          Selvkørende biler er fremtiden for os. Lige nu, i 2024, kan flere
          biler holde sig i vognbanen, parkere selv og bremse, hvis det er
          nødvendigt, men de kræver stadig, at en fører sidder bag rattet. Jo
          længere vi kommer ind i fremtiden,så mere selvkørende vil bilerne
          blive.
        </Typography>
      </Container>
    </LayoutWelcome>
  );
};

export default Welcome;
