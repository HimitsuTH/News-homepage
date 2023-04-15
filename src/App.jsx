import { useState } from "react";
import "./assets/styles/main.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import New from "./components/New";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainContent />
        <New />
        <Popular />
      </main>
    </div>
  );
}

export default App;
