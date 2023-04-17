import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
import ThemeProvider from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div id="main-content">
        <SideBar />
        <main>
          <Main />
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
