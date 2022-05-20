import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div id="home-screen">
      <Box mt={14}>
        <Typography
          variant="h1"
          component="h1"
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          1989
        </Typography>
        <Typography variant="h5" mb={4}>
          Entdecke die Geschichte des Falls der Berliner Mauer im Spiegel des
          europäischen Kulturerbes.
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Link to="../list">
            <Button variant="contained" color="secondary">
              Los geht's
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
