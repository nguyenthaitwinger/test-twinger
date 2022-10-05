import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { route } from "./routes";

const App: React.FC = () => {
  useEffect(() => {});

  return (
    <BrowserRouter>
      <Routes>
        {route.map((route, index) => {
          const Element = route.element;
          return <Route key={index} path={route.path} element={<Element />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
