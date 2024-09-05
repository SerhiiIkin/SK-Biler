import { useState } from "react";

import { Typography } from "@customMUI/Typography";

import { TabPanel } from "@components/TabPanel";

import { a11yProps } from "@variables/a11yProps";
import { advantages } from "@variables/advantages";
import { challenges } from "@variables/challenges";
import { examplesCars } from "@variables/examplesCars";
import { teknologiAndSystem } from "@variables/teknologiAndSystem";

import { Box, Tab, Tabs } from "@mui/material";
import { List, ListItem } from "@mui/material";

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={(theme) => ({
        py: { xs: 1, sm: 2 },
        flexGrow: 1,
        bgcolor: theme.vars.palette.background.default,
        display: { xs: "block", md: "flex" },
        minHeight: { xs: "calc(100dvh - 56px)", sm: "calc(100dvh - 64px)" },
      })}
    >
      <Tabs
        indicatorColor="transparent"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          alignItems: "center",
          minWidth: { md: "max-content" },
        }}
      >
        <Tab
          label="Teknologier og systemer"
          sx={(theme) => ({ color: theme.vars.palette.text.default })}
          {...a11yProps(0)}
        />
        <Tab
          label="Fordele ved Selvkørende Biler"
          sx={(theme) => ({ color: theme.vars.palette.text.default })}
          {...a11yProps(1)}
        />
        <Tab
          label="Udfordringer ved Selvkørende Biler"
          sx={(theme) => ({ color: theme.vars.palette.text.default })}
          {...a11yProps(2)}
        />
        <Tab
          label="Aktuelle Fremskridt og Eksempler på Selvkørende Biler
"
          sx={(theme) => ({ color: theme.vars.palette.text.default })}
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h4">Teknologier og systemer</Typography>
        <List>
          {teknologiAndSystem.map((item, i) => (
            <ListItem key={i}> {item} </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h4">Fordele ved Selvkørende Biler</Typography>
        <List>
          {advantages.map((item, i) => (
            <ListItem key={i}> {item} </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h4">Udfordringer ved Selvkørende Biler</Typography>
        <List>
          {challenges.map((item, i) => (
            <ListItem key={i}> {item} </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h4">
          Aktuelle Fremskridt og Eksempler på Selvkørende Biler
        </Typography>
        <Typography variant="body1" component="p">
          Flere virksomheder arbejder på at udvikle selvkørende biler, herunder
          tech-giganter som Google med deres Waymo-projekt, Tesla, Uber samt
          traditionelle bilproducenter som Ford, General Motors og BMW.
        </Typography>
        <List>
          {examplesCars.map((item, i) => (
            <ListItem key={i}> {item} </ListItem>
          ))}
        </List>
      </TabPanel>
    </Box>
  );
};

export default VerticalTabs;
