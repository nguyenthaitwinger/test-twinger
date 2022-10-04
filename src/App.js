
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { route } from "./routes";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((route, index) => {
          const Element = route.element;
          return <Route
            key={index}
            path={route.path}
            element={
              <Element />
            }
          />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
