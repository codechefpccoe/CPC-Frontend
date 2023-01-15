import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<> </>} />
      </Routes>
    </div>
  );
};

export default App;

// PathName refer Readme.md 