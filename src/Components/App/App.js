import React, { useState } from "react";
import { SideNavBar } from "../SideNavBar";
import { Header } from "../Header";
import { UI } from "../UI";

function App() {
  const [reset, setReset] = useState(false);

  return (
    <div className="App">
      <Header />
      <SideNavBar setReset={setReset} />
      <UI reset={reset} setReset={setReset} />
    </div>
  );
}

export default App;
