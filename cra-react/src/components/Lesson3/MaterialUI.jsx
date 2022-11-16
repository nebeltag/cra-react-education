import React, { useState, useCallback } from 'react';
import {
  TextField, Fab, Button, ThemeProvider, useTheme, createTheme
} from "@mui/material";

import './style.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

function SomeNestedChild() {
  const theme = useTheme();
  return (
    <Button
      style={{
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.secondary.main,
        color: 'white',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      Text
    </Button>
  );
}


export default function ExampleUI() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <TextField
        style={{ margin: '20px' }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <SomeNestedChild />
      <Fab variant="extended">Click</Fab>
    </ThemeProvider>

  );
}
