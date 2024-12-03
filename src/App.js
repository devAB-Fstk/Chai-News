import "./App.css";

import React, { useState } from "react";
import Navbar from "./Componants/Navbar";
import News   from "./Componants/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_APIKEY_HERE

  const [progress, setProgress] = useState(0);
 
    return (
      <BrowserRouter>
        <div>
          <LoadingBar color="#f11946" progress={progress} />
          <Navbar />
          {/* <News apiKey={apiKey}  setProgress={setProgress} pageSize ={pageSize} country ="in" category = "sports"/> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={apiKey} 
                  setProgress={setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;