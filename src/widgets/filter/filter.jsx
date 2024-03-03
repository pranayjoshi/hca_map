import { Combobox } from "@/components/ui/combobox";

export default function Filter() {
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
  return (
    <div className="h-full w-1/6 items-center justify-center place-items-center shadow-xl p-4 bg-white rounded-lg">
      <h1 className="text-center text-3xl font-semibold py-2 mb-4">Filter</h1>
      <div className="flex items-center justify-center">
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 pb-1">STATE</p>
          <Combobox fm={vals_state} />
        </div>
      </div>
    </div>
  );
}
