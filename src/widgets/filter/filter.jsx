import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import setInitialData  from "@/utils/set_initial_data";
import { useDispatch } from "react-redux";
import { setDisplayIds, setDispl } from "../../state/slice";

export default function Filter() {
    async function fetchData() {
        try {
            const data = await setInitialData();
            // console.log(data); // This should now be an array
            return data
        } catch (err) {
            console.error(err);
        }
    }
    const dispatch = useDispatch();
  const vals_state = [
    { value: "VA", label: "VA" },
    { value: "NH", label: "NH" },
    { value: "IN", label: "IN" },
    { value: "TX", label: "TX" },
    { value: "KS", label: "KS" },
    { value: "CO", label: "CO" },
    { value: "FL", label: "FL" },
    { value: "CA", label: "CA" },
    { value: "NV", label: "NV" },
    { value: "TN", label: "TN" },
    { value: "OH", label: "OH" },
    { value: "GA", label: "GA" },
    { value: "MO", label: "MO" },
    { value: "LA", label: "LA" },
    { value: "UT", label: "UT" },
    { value: "ID", label: "ID" },
    { value: "AK", label: "AK" },
    { value: "NC", label: "NC" },
    { value: "SC", label: "SC" },
    { value: "KY", label: "KY" },
  ];
  const vals_division = [
    { value: "Capital", label: "Capital" },
    { value: "Central West Tx", label: "Central West Tx" },
    { value: "Continental", label: "Continental" },
    { value: "East Florida", label: "East Florida" },
    { value: "Far West", label: "Far West" },
    { value: "Gulf Coast", label: "Gulf Coast" },
    { value: "HCA Corp", label: "HCA Corp" },
    { value: "HSC", label: "HSC" },
    { value: "MidAmerica", label: "MidAmerica" },
    { value: "Mountain", label: "Mountain" },
    { value: "North Carolina", label: "North Carolina" },
    { value: "North Florida", label: "North Florida" },
    { value: "North Texas", label: "North Texas" },
    { value: "Physician Services Group", label: "Physician Services Group" },
    { value: "San Antonio", label: "San Antonio" },
    { value: "South Atlantic", label: "South Atlantic" },
    { value: "Supply Chain", label: "Supply Chain" },
    { value: "Tristar", label: "Tristar" },
    { value: "West Florida", label: "West Florida" },
  ];
  const vals_emr = [{'value': 'Meditech 5.6', 'label': 'Meditech 5.6'}, {'value': 'VAA', 'label': 'VAA'}, {'value': 'Need to Identify', 'label': 'Need to Identify'}, {'value': 'Meditech Expanse GCP', 'label': 'Meditech Expanse GCP'}, {'value': '*None', 'label': '*None'}, {'value': 'EPIC', 'label': 'EPIC'}, {'value': 'Cerner', 'label': 'Cerner'}, {'value': 'Meditech 6.x/Expanse', 'label': 'Meditech 6.x/Expanse'}]
  const vals_tz = [{'value': 'Eastern Time Zone', 'label': 'Eastern Time Zone'},{'value': 'Central Time Zone', 'label': 'Central Time Zone'}, {'value': 'Mountain Time Zone', 'label': 'Mountain Time Zone'},  {'value': 'Pacific Time Zone', 'label': 'Pacific Time Zone'}, {'value': 'Alaska Time Zone', 'label': 'Alaska Time Zone'}]
  return (
    <div className="h-full w-1/6 items-center justify-center place-items-center shadow-xl p-4 bg-white rounded-lg">
      <h1 className="text-center text-3xl font-semibold py-2 mb-4">Filter</h1>
      <div className=" items-center justify-center">
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} selectedState="facility_state" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">DIVISION</p>
          <Combobox fm={vals_division} selectedState="division_name" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">TIME ZONE</p>
          <Combobox fm={vals_tz} selectedState="tz_description" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">DIVISION</p>
          <Combobox fm={vals_emr} selectedState="emr_name" />
        </div>
        <Button onClick={() => dispatch(setDispl())} className="mt-6 block mx-auto">Reset</Button>
        {/* <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} />
        </div> */}
      </div>
    </div>
  );
}
