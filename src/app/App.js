import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

function App() {
  return (
    <>
      <Header />
      <div id="main-content">
        <SideBar />
        <main>
          <Main />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
