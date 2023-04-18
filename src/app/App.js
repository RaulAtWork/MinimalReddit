import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import ThemeProvider from "./ThemeContext";
import { Route, Routes } from "react-router-dom";
import Popular from "./categories/Popular";
import Hot from "./categories/Hot";
import New from "./categories/New";
import Top from "./categories/Top";
import Rising from "./categories/Rising";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div id="main-content">
        <SideBar />
        <main>
          <Routes>
            <Route exact path="/" Component={Popular}></Route>
            <Route path="/hot" Component={Hot}></Route>
            <Route path="/new" Component={New}></Route>
            <Route path="/top" Component={Top}></Route>
            <Route path="/rising" Component={Rising}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
