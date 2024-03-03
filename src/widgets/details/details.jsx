import { useSelector, useDispatch } from "react-redux";
import DetailCard from "./detail_card";
import { useEffect } from "react";
export default function Details() {
  const data = useSelector((state) => state.displayIds["display_ids"]);
  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);
  return (
    <div className="h-[90vh] w-1/5 items-center shadow-xl bg-white rounded-lg px-4 pb-4 overflow-y-auto">
      <h1 className="text-center text-3xl text-semibold py-4">Details</h1>
      {data.map((item, index) => (

        <div className="my-2">
        <DetailCard key={index} data={item}/>
        </div>
      ))}
    </div>
  );
}
