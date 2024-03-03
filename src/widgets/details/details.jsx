import { useSelector, useDispatch } from "react-redux";
import DetailCard from "./detail_card";
import { useEffect } from "react";
import { setTempData } from "../../state/slice";
export default function Details() {
  const data = useSelector((state) => state.displayIds["display_ids"]);
    var tempData = useSelector((state) => state.displayIds["temp_data"]);
    var dispatch = useDispatch();
  useEffect(() => {
    if (!data) return;
    dispatch(setTempData([]));
    // console.log(data);
  }, [data]);
  console.log(tempData);
  if (tempData && Object.keys(tempData).length > 0){
    console.log(tempData)
    return (
    <div className="h-[90vh] w-1/5 items-center shadow-xl bg-white rounded-lg px-4 pb-4 overflow-y-auto">
      <h1 className="text-center text-3xl text-semibold py-4">Details</h1>
        <DetailCard data={tempData}/>
    </div>
    )
  }
  return (
    <div className="h-[90vh] w-1/4 items-center shadow-xl bg-white rounded-lg px-4 pb-4 overflow-y-auto">
      <h1 className="text-center text-3xl text-semibold py-4">Details</h1>
      {data.map((item, index) => (

        <div className="my-2">
        <DetailCard key={index} data={item}/>
        </div>
      ))}
    </div>
  );
}
