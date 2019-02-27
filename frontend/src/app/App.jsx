import React, { Component } from "react";
import "./assets/stylesheets/App.scss";
import { ThemeProvider } from "@callstack/react-theme-provider";
import { theme } from "./config/config";
import Poll from "./components/Poll";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Poll />
      </ThemeProvider>
    );
  }
}

export default App;
