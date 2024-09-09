import VerticalTabs from "@components/VerticalTabs";
import { Typography } from "@customMUI/Typography";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box id="about" component="section">
      <Typography variant="h3" sx={{ textAlign: "center", py:3 }}>Om Selvkørende biler</Typography>
      <VerticalTabs />
    </Box>
  );
};

export default About;
