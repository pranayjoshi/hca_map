import { useState } from "react";
import MapFunc from "./widgets/map/map";
import Filter from "./widgets/filter/filter";
import Details from "./widgets/details/details";
import ChoroplethMap from "./widgets/details/details2";
import 'leaflet/dist/leaflet.css';
import MapComponent from "./widgets/map/map2";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-2 pl-4">
        <div className="flex flex-col items-center justify-center w-5/6">
          <h1 className="text-6xl text-gray-900 pb-2">HCA Mapper</h1>
        </div>
        <div className="flex w-full gap-4">
          <Filter />
          <MapComponent/>
          <Details />
        </div>
        {/* <ChoroplethMap/> */}
      </div>
    </>
  );
}

export default App;
