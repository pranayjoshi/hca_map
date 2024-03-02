import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import MapFunc from "./widgets/map/map";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-5/6">
          <h1 className="text-6xl text-gray-900">HCA Mapper</h1>
        </div>
        <MapFunc />
      </div>
    </>
  );
}

export default App;
