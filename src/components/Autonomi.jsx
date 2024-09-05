import { ImgWithScroll } from "@customMUI/ImgWithScroll";
import {
  SpanWithScrollToH3,
  SpanWithScrollToP,
} from "@customMUI/SpanWithScroll";

import { Typography } from "@components/customMUI/Typography";

import autonomi from "@assets/niveauer-af-selvkorende-biler.jpg";

import { Container, Grid2 as Grid } from "@mui/material";

const Autonomi = () => {
  return (
    <Container
      component="section"
      id="level"
      sx={{
        textAlign: "center",
        py: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h3">
            <SpanWithScrollToH3>Niveauer af autonomi</SpanWithScrollToH3>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ImgWithScroll src={autonomi} alt="autonomi" loading="lazy" />
        </Grid>
        <Grid xs={12} size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            component="p"
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { gridColumn: "span 2", gap: 1 },
            })}
          >
            <SpanWithScrollToP>
              Der findes fem niveauer af autonomi i selvkørende biler. Det
              laveste niveau er førerstøtte, hvor bilen kan køre selv uden, at
              man trykker på speederen. Det næste niveau er meget populært lige
              nu, fordi flere biler kan styre, bremse og accelerere uden, at
              føreren aktivt skal gøre noget. Biler på det tredje niveau har
              flere kameraer, radarer og sensorer. Dette hjælper bilen med at
              overvåge trafikken foran, justere hastigheden, skifte vognbane
              eller tage en afkørsel. Selvom bilen faktisk kan køre selv, skal
              føreren stadig være klar til at overtage styringen. På det næste
              niveau kan bilerne køre selv uden fører, men kun inden for
              bestemte geografiske områder og under specifikke forhold. Det
              sidste niveau er fuld autonomi, hvor køretøjet kan køre selv under
              alle forhold uden fører bag rattet.
            </SpanWithScrollToP>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Autonomi;
