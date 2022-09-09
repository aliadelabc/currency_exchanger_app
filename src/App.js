import React from "react";
import Home from "./components/home/Home";
//import css
import "./App.css";
//react router dom v6
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";
import Header from "./components/header/Header";
import NavigationDetails from "./components/details/NavigationDetails";

function App() {
  return (
    <React.StrictMode>
      <div className="app">
        <div className="nav">
          <Header />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:currency" element={<NavigationDetails />} />
            <Route
              path="/details/:currency/:currency_full_name/:to/:amount/"
              element={<Details />}
            />
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
