import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import { Box } from "@mui/material";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archive/Archives";
import { Router, Route } from "wouter";

const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Router>
        <SwipeDrawer />
        <Route path="/" component={Notes} />
        <Route path="/archive" component={Archives} />
        <Route path="/delete" component={DeleteNotes} />
      </Router>
    </Box>
  );
}

export default Home;
