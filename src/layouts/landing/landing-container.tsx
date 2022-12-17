import React, { useState} from 'react';
import { AppBar, Grid, Tabs, Tab } from '@mui/material';

export function LandingContainer() {
  const [selectedTab, setSelectedTab] = useState<string>("0");

  const handleTabChange = (event: React.SyntheticEvent, value: string) => {
    setSelectedTab(value)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar >app bar</AppBar>
      </Grid>
      <Grid item xs={12} height="auto">
      <Tabs sx={{paddingTop: "10rem"}} value={selectedTab} onChange={handleTabChange} aria-label="basic tabs example">
    <Tab label="Item One" value="0"/>
    <Tab label="Item Two"  value="1"/>
    <Tab label="Item Three" value="2"/>
  </Tabs>
      </Grid>
    </Grid>
  )
}