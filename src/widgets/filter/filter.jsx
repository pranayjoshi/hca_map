import { Combobox } from "@/components/ui/combobox";

export default function Filter() {
  return (
    <div className="h-full w-1/5 items-center justify-center place-items-center border border-gray-300 p-4 bg-white rounded-lg">
      <h1 className="text-center text-3xl font-semibold py-2 mb-4">Filter</h1>
      <div className="flex items-center justify-center">
        <Combobox />
      </div>
    </div>
  );
}
