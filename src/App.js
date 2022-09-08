import React from "react";
import Home from "./components/home/Home";

//react router dom v6
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:currency" element={<Details />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
