import { useEffect, useState } from "react";
// import MapFunc from "./widgets/map/map";
import Filter from "./widgets/filter/filter";
import Details from "./widgets/details/details";
// import ChoroplethMap from "./widgets/details/details2";
import 'leaflet/dist/leaflet.css';
import MapComponent from "./widgets/map/map";
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setDisplayIds,  copyOrigData } from './state/slice';
import setInitialData from "./utils/set_initial_data";
import { data } from "autoprefixer";
// import './App.css'
async function fetchData() {
  try {
    const data = await setInitialData();
    // console.log(data); // This should now be an array
    return data
  } catch (err) {
    console.error(err);
  }
  
}

fetchData();

function App() {
  var count = useSelector((state) => state.displayIds["display_ids"]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchDataAndDispatch = async () => {
      const data = await fetchData();
      // console.log(data)
      dispatch(setDisplayIds(data));
      dispatch(copyOrigData(data));

      setIsLoading(false);
      // console.log(count)
    };
    
    fetchDataAndDispatch();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 pl-4">
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
