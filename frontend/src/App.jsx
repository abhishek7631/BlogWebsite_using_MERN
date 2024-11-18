import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./RootPage";
import Footer from "./Footer";
import BlogPage from "./BlogPage";
import Iblog from "./Iblog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage></RootPage>}></Route>
          <Route path="/signup" element={<RootPage></RootPage>} />
          <Route path="/login" element={<BlogPage></BlogPage>}></Route>
          <Route path="/iblog" element={<Iblog></Iblog>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
