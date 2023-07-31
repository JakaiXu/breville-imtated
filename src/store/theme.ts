import { createTheme } from "@mui/material";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 460,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 2000,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});
export default theme;
