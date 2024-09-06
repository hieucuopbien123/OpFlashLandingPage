import React from "react";
import Home from "./pages/Home";
import AnimatedPageWrapper from "./components/AnimatedPageWrapper";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <div style={{minH: "calc(100vh)", margin: "0 auto"}} >
        <AnimatedPageWrapper animated="fadeIn">
          <Home/>
        </AnimatedPageWrapper>
      </div>
    </div>
  )
}

export default App;
